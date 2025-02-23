import type { Route } from "../+types/root";
import {Button} from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div>
            <h1>Welcome to React Router!</h1>
            <p>
                This is a new React Router app. It uses the latest version of
                React Router and is pre-configured with server-side rendering
                and other best practices.
            </p>
            <Button>Click me</Button>
        </div>
    );
}
