import {useContext, useEffect} from "react";
import {Outlet} from "react-router";
import {SupabaseAuthContext} from "~/lib/supabaseAuthProvider";

export default function ProtectedAccountInvoiceIndex() {
    const {user, session, isAuthenticating} = useContext(SupabaseAuthContext);

    useEffect(() => {
        if (!user && !isAuthenticating) {
            localStorage.setItem("from", location.href);
            location.replace("/login");
        }
    }, [user, session, isAuthenticating]);

    if (!user) {
        return null;
    }

    return <Outlet/>;
}