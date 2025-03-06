import {useContext, useEffect} from "react";
import {Outlet, redirect} from "react-router";
import {SupabaseAuthContext} from "@/lib/supabaseAuthProvider";
import type {Route} from "../../.react-router/types/app/routes/+types/_protected.account._index";


export async function loader({params}: Route.LoaderArgs) {
    return redirect("/abc");
}

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