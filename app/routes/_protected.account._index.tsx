import {useContext} from "react";

import type {Route} from "./+types/_protected.account._index";
import {SupabaseAuthContext} from "~/lib/supabaseAuthProvider";
import {LogoutButton} from "@/components/LogoutButton";
import {Link} from "react-router";
import {Button} from "@/components/ui/button";

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
                    <b>Welcome {user?.email}!</b>
                    <div>
                        <Link to={"/account/invoice"}>
                            <Button>Invoice</Button>
                        </Link>
                    </div>
                    <div>
                        <LogoutButton/>
                    </div>
                </div>
            </main>
        )
    );
}
