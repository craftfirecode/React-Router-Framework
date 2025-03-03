import LayoutContainer from "@/layout/layoutContainer";
import type {Route} from "./+types/blog._index";
import {CardFx} from "@/components/ui/card-fx";
import React from "react";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "About"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function BlogIndex({loaderData}: Route.ComponentProps) {
    return (
        <LayoutContainer className="flex justify-center">
            <div className="gap-4 grid md:grid-cols-2 xl:grid-cols-3">
                <CardFx blogID="5"/>
                <CardFx blogID="10"/>
                <CardFx blogID="15"/>
            </div>
        </LayoutContainer>
    );
}