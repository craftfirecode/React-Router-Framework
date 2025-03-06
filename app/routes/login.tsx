import type {Route} from "./+types/login";
import {createServerClient, parseCookieHeader, serializeCookieHeader} from "@supabase/ssr";

export function meta({}: Route.MetaArgs) {
    return [{title: "Login"}, {name: "description", content: "login"}];
}

export async function loader({request}: any) {
    const headers = new Headers()

    const supabase = createServerClient(import.meta.env.VITE_SUPABASE_API_URL as string, import.meta.env.VITE_SUPABASE_ANON_KEY as string, {
        cookies: {
            getAll() {
                return parseCookieHeader(request.headers.get('Cookie') ?? '')
            },
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({name, value, options}) =>
                    headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
                )
            },
        },
    })
    const {data, error} = await supabase.auth.signInWithPassword({
        email: 'demo@demo.demo',
        password: 'demo',
    })

    console.log(data)
}

export default function LoginPage({loaderData}: Route.ComponentProps) {

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-5 min-h-0">
                <h1>Sign in</h1>
                <div>

                </div>
            </div>
        </main>
    );
}
