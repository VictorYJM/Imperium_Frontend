import React from "react";

type InputProps = React.ComponentProps<"input">;

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="w-full bg-input px-4 py-2 rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
        />
    );
}