import {useContext, useEffect} from "react";
import {Outlet} from "react-router";
import {SupabaseAuthContext} from "~/lib/supabaseAuthProvider";

export default function ProtectedAccountOutlet() {
    const {user, isAuthenticating} = useContext(SupabaseAuthContext);

    useEffect(() => {
        if (!isAuthenticating && !user) {
            localStorage.setItem("from", location.href);
            location.replace("/login");
        }
    }, [isAuthenticating]);

    if (!user) {
        return null;
    }

    return <Outlet/>;
}