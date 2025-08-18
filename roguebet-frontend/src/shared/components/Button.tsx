import React from "react";

type ButtonProps = React.ComponentProps<"button">;

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="w-full bg-primary text-text-primary font-bold py-2 px-4 rounded-md hover:bg-primary-hover transition-colors duration-200"
        >
            {children}
        </button>
    );
}