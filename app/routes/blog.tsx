import {Outlet} from "react-router";

export default function ProjectLayout() {
    return (
        <div>
            <main className="blogLayout">
                <Outlet/>
            </main>
        </div>
    );
}