import type {Route} from "./+types/login";
import {Form} from "react-router";
import {createServerClient, parseCookieHeader, serializeCookieHeader} from "@supabase/ssr";

export function meta({}: Route.MetaArgs) {
    return [{title: "Login"}, {name: "description", content: "login"}];
}

export async function action({request,}: Route.ClientActionArgs) {
    let formData = await request.formData();
    const form_email = formData.get("email");
    const form_password = formData.get("password");

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

    const {data, error} = await supabase.auth.signInWithPassword({
        email: form_email as string,
        password: form_password as string,
    });

    if (error) {
        return new Response("Fehler bei der Anmeldung", {status: 401});
    }
    return new Response(JSON.stringify(data.user), {
        headers,
    });
}

export default function LoginPage({loaderData, actionData}: {
    loaderData: Route.ComponentProps,
    actionData: { title: string }
}) {
    const data = loaderData;
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-5 min-h-0">
                <h1>Sign in</h1>
                <div>
                    <h1>Project</h1>
                    <Form method="post">
                        <input type="email" name="email" placeholder="email"/>
                        <input type="password" name="password" placeholder="password"/>
                        <button type="submit">Submit</button>
                    </Form>
                    {actionData ? (
                        <p>{actionData.title} updated</p>
                    ) : null}
                </div>
            </div>
        </main>
    );
}
