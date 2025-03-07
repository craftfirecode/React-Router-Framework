import React from "react";
import {cn} from "@/lib/utils";

export default function LayoutContainer({children, className}: any) {
    return (
        <div className={cn("container mx-auto px-5 my-0", className)}>
            {children}
        </div>
    );
}