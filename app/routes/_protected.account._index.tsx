import type {Route} from "./+types/_protected.account._index";
import {LogoutButton} from "@/components/supabase/LogoutButton";
import {Link} from "react-router";
import {Button} from "@/components/ui/button";
import {ApiPlaceholder} from "~/api/placeholder";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Account"},
        {name: "description", content: "Your account"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    try {
        return await ApiPlaceholder("1");
    } catch (error) {
        console.error(error);
        return {data: null};
    }
}

export default function AccountPage({loaderData}: Route.ComponentProps) {
    const {title} = loaderData
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                {title}
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
    );
}
