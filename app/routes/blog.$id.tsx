import LayoutContainer from "@/layout/layoutContainer";
import type {Route} from "./+types/blog.$id";
import {useParams} from "react-router";
import {ApiPlaceholder} from "~/api/placeholder";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "About"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    try {
        return await ApiPlaceholder(params.id);
    } catch (error) {
        console.error(error);
        return {data: null};
    }
}

export default function BlogIndex({loaderData}: Route.ComponentProps) {
    const data = loaderData;
    const {id} = useParams();
    return (
        <div>
            <LayoutContainer>
                <h1>Title: {data.title}</h1>
                <h1>ID: {data.id}</h1>
                useParams: {id}
            </LayoutContainer>
        </div>
    );
}