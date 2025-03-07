import type {Route} from "./+types/_protected.account._index";
import {Form, Link} from "react-router";
import {Button} from "@/components/ui/button";
import {ApiPlaceholder} from "~/api/placeholder";
import {createServerClient, parseCookieHeader} from "@supabase/ssr";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Account"},
        {name: "description", content: "Your account"},
    ];
}

export async function action({request}: Route.ActionArgs) {
    const supabase = createServerClient(
        import.meta.env.VITE_SUPABASE_API_URL as string,
        import.meta.env.VITE_SUPABASE_ANON_KEY as string,
        {
            cookies: {
                getAll: () => {
                    return parseCookieHeader(request.headers.get("Cookie") ?? "");
                },
            }
        }
    );
    const authUser = await supabase.auth.signOut();
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
                <Form method="post">
                    <Button variant="outline" type="submit">Logout</Button>
                </Form>
            </div>
        </main>
    );
}
