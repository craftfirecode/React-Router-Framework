import type { Route } from "./+types/blog.$id";
import {useParams} from "react-router";
import LayoutBlog from "@/layout/layoutBlog";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetch data from ssr:', data);
        return { data };
    } catch (error) {
        console.error('Fetch error:', error);
        return { data: null };
    }
}

export default function BlogIndex({loaderData}: Route.ComponentProps) {
    const { data } = loaderData;
    const { id } = useParams();
    return (
        <div>
            <LayoutBlog>
                <h1>Title: {data.title}</h1>
                <h1>ID: {data.id}</h1>
                useParams: {id}
            </LayoutBlog>
        </div>
    );
}