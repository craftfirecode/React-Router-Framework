import React from "react";

export default function LayoutBlog({children}: any) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
}