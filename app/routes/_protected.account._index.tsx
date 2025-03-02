import {useContext} from "react";

import type {Route} from "./+types/_protected.account._index";
import {SupabaseAuthContext} from "~/lib/supabaseAuthProvider";
import {LogoutButton} from "@/components/LogoutButton";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Account"},
        {name: "description", content: "Your account"},
    ];
}

export default function AccountPage() {
    const {user} = useContext(SupabaseAuthContext);

    return (
        user && (
            <main className="flex items-center justify-center pt-16 pb-4">
                <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                    <div>
                        <h1>Welcome {user?.email}!</h1>
                        <Link to={"/account/tax"}>TAX 1</Link>
                    </div>
                    <div>
                        <LogoutButton/>
                    </div>
                </div>
            </main>
        )
    );
}
