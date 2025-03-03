import React from "react";
import {cn} from "@/lib/utils";

export default function LayoutContainer({children, className}: any) {
    return (
        <div className={cn("container mx-auto my-15", className)}>
            {children}
        </div>
    );
}