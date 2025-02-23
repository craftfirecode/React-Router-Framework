import type { Route } from "../+types/root";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import axios from "axios";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const [data, setData] = React.useState<{ title: string | null }>({ title: null });

    useEffect(() => {
        (async () => {
            console.log('Home useEffect is fired');
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Welcome to React Router!</h1>
            <p>
                This is a new React Router app. It uses the latest version of
                React Router and is pre-configured with server-side rendering
                and other best practices.
            </p>
            <Button>Click me</Button>
            <div>CSR from useEffect & useState: {data && <span>{data.title}</span>}</div>
        </div>
    );
}