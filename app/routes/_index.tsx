import type {Route} from "../+types/root";
import {Button} from "@/components/ui/button";
import React from "react";
import axios from "axios";
import LayoutContainer from "@/layout/layoutContainer";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Home"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}


export async function loader({params,}: Route.ClientLoaderArgs) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response.data;
    } catch (error) {
        console.error(error);
        return {data: null};
    }

}

export default function Home({loaderData,}: Route.ComponentProps) {
    const {title}: { title: string } = loaderData || {title: ''};

    return (
        <>
            <div className="relative h-[70vh] bg-cover bg-center">
                <img src="/hero-bg.webp" alt="Hero section background image"
                     className="w-full h-full object-cover"/>
                <div className="scroll-down"></div>
            </div>
            <LayoutContainer>
                <h1>Welcome to React Router!</h1>
                <p>
                    This is a new React Router app. It uses the latest version of
                    React Router and is pre-configured with server-side rendering
                    and other best practices.
                </p>
                <Button>Click me</Button>
                <div>API Response: {title && <span>{title}</span>}</div>
            </LayoutContainer>
        </>

    );
}