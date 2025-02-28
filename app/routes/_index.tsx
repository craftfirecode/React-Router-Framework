import type {Route} from "../+types/root";
import {Button} from "@/components/ui/button";
import React, {useEffect} from "react";
import axios from "axios";
import LayoutContainer from "@/layout/layoutContainer";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}


export async function loader({params,}: Route.ClientLoaderArgs) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
}

export default function Home({loaderData,}: Route.ComponentProps) {
    const {title} : {title: string} = loaderData || { title: '' };

    return (
        <LayoutContainer>
            <h1>Welcome to React Router!</h1>
            <p>
                This is a new React Router app. It uses the latest version of
                React Router and is pre-configured with server-side rendering
                and other best practices.
            </p>
            <Button>Click me</Button>
            <div>CSR from useEffect & useState: {title && <span>{title}</span>}</div>
        </LayoutContainer>
    );
}