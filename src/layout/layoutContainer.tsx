import React from "react";
import {cn} from "@/lib/utils";

export default function LayoutContainer({children, className}: any) {
    return (
        <div className={cn(className, "container mx-auto")}>
            {children}
        </div>
    );
}