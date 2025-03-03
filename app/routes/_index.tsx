import type {Route} from "../+types/root";
import React from "react";
import axios from "axios";
import LayoutContainer from "@/layout/layoutContainer";
import {CardFx} from "@/components/ui/card-fx";

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
                <div>
                    <h1>{title}</h1>
                    <div className="gap-4 grid md:grid-cols-2 xl:grid-cols-3">
                        <CardFx blogID="5"/>
                        <CardFx blogID="10"/>
                        <CardFx blogID="15"/>
                    </div>
                </div>
            </LayoutContainer>
        </>

    );
}