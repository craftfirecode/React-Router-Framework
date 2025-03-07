import type {Route} from "./+types/team";
import axios from "axios";
import LayoutContainer from "@/layout/layoutContainer";
import {useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Team"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

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
    const [name, setName] = useState("useState String");
    return (
        <LayoutContainer>
            <b>Render SSR:</b> {title}<br/>
            <b>Render CSR:</b> {csr}<br/>
            <b>Render useState:</b> {name}
            <div>
                <b>Render accordion in SSR:</b>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </LayoutContainer>
    );
}