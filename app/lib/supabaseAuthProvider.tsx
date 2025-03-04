import type {Session, User} from "@supabase/supabase-js";
import {createContext, useEffect, useState} from "react";
import {supabaseClient} from "./supabaseClient";

type AuthState = {
    user: User | null;
    session: Session | null;
    isAuthenticating: boolean;
};

export const SupabaseAuthContext = createContext<AuthState>({
    user: null,
    session: null,
    isAuthenticating: true,
});

const SupabaseAuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        (async () => {
            const {data} = await supabaseClient.auth.getSession();
            setUser(data?.session?.user || null);
            setSession(data?.session || null);
            setIsAuthenticating(false);
        })();

        const {data: authListener} = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            setSession(session || null);
        });

        return () => authListener.subscription.unsubscribe();
    }, []);

    return (
        <SupabaseAuthContext.Provider value={{user, session, isAuthenticating}}>
            {children}
        </SupabaseAuthContext.Provider>
    );
};

export {SupabaseAuthProvider};