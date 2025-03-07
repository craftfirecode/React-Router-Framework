import type {Route} from "./+types/login";
import {createServerClient, parseCookieHeader, serializeCookieHeader} from "@supabase/ssr";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import LayoutContainer from "@/layout/layoutContainer";

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
        <LayoutContainer className="flex justify-center">
            <div className="flex flex-col gap-6 w-[450px]">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form method="post">
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" name="password" type="password" required/>
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="#" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </LayoutContainer>
    );
}
