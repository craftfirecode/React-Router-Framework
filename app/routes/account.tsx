import LayoutContainer from "@/layout/layoutContainer";
import type {Route} from "./+types/account";


export function meta({}: Route.MetaArgs) {
    return [
        {title: "About"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}


export default function BlogIndex({loaderData}: Route.ComponentProps) {
    return (
        <div>
            <LayoutContainer>
                Account
            </LayoutContainer>
        </div>
    );
}