import {Outlet} from "react-router";
import LayoutContainer from "@/layout/layoutContainer";

export default function ProjectLayout() {
    return (
        <LayoutContainer>
            <Outlet/>
        </LayoutContainer>
    );
}

