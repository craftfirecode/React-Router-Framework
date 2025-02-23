import React from "react";

export default function LayoutContainer({children}: any) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
}