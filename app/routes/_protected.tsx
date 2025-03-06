import {Outlet, redirect} from "react-router";
import type {Route} from "../../.react-router/types/app/routes/+types/_protected.account._index";
import {createServerClient, parseCookieHeader} from "@supabase/ssr";


export async function loader({request}: Route.LoaderArgs) {
    const supabase = createServerClient(
        import.meta.env.VITE_SUPABASE_API_URL as string,
        import.meta.env.VITE_SUPABASE_ANON_KEY as string,
        {
            cookies: {
                getAll() {
                    return parseCookieHeader(request.headers.get("Cookie") ?? "");
                }
            },
        }
    );

    const authUser = await supabase.auth.getUser();
    if (authUser.data.user === null) {
        return redirect("/login");
    } else {
        return authUser
    }
}

export default function ProtectedAccountOutlet() {
    return <Outlet/>;
}