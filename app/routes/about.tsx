import type {Route} from "./+types/about";
import LayoutContainer from "@/layout/layoutContainer";
import axios from "axios";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "About"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response.data;
    } catch (error) {
        console.error(error);
        return {data: null};
    }
}

export default function About({loaderData}: Route.ComponentProps) {
    const {title} = loaderData;
    return (
        <LayoutContainer>
            <h1>{title}</h1>
        </LayoutContainer>
    );
}