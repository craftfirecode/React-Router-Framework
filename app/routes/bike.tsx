import type {Route} from "./+types/bike";
import axios from "axios";
import LayoutContainer from "@/layout/layoutContainer";
import {useState} from "react";

export async function loader({params}: Route.LoaderArgs) {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
    return response.data;
}

export async function clientLoader({serverLoader}: Route.ClientLoaderArgs) {
    const data = await serverLoader();
    return {...data, csr: 'csr'};
}

clientLoader.hydrate = true as const;

export default function Product({loaderData}: Route.ComponentProps) {
    const {title, csr} = loaderData
    console.log(loaderData)
    const [name, setName] = useState("Muster");
    return (
        <LayoutContainer>
            {title}<br/>
            {csr}<br/>
            {name}
        </LayoutContainer>
    );
}