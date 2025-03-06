import type {Route} from "./+types/login";
import {createServerClient, parseCookieHeader, serializeCookieHeader} from "@supabase/ssr";

export function meta({}: Route.MetaArgs) {
    return [{title: "Login"}, {name: "description", content: "login"}];
}

export async function loader({request}: any) {
    const headers = new Headers();

    // Supabase Client erstellen mit Cookie-Unterstützung
    const supabase = createServerClient(
        import.meta.env.VITE_SUPABASE_API_URL as string,
        import.meta.env.VITE_SUPABASE_ANON_KEY as string,
        {
            cookies: {
                getAll() {
                    return parseCookieHeader(request.headers.get("Cookie") ?? "");
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({name, value, options}) =>
                        headers.append("Set-Cookie", serializeCookieHeader(name, value, options))
                    );
                },
            },
        }
    );

    // Benutzer mit E-Mail und Passwort anmelden
    const {data, error} = await supabase.auth.signInWithPassword({
        email: "demo@demo.demo",
        password: "demo",
    });

    if (error) {
        return new Response("Fehler bei der Anmeldung", {status: 401});
    }
    return new Response(JSON.stringify(data.user), {
        headers,
    });
}

export default function LoginPage({loaderData}: Route.ComponentProps) {
    const data = loaderData;
    console.log(JSON.parse(data));
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-5 min-h-0">
                <h1>Sign in</h1>
                <div></div>
            </div>
        </main>
    );
}
