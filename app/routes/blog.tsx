import {Outlet} from "react-router";

export default function ProjectLayout() {
    return (
        <div>
            <div>Example Layout</div>
            <main>
                <Outlet/>
            </main>
            <div>Example Layout</div>
        </div>
    );
}