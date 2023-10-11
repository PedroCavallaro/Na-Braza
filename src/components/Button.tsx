import { ButtonHTMLAttributes, ReactNode } from "react";
import { text } from "stream/consumers";
import { twMerge } from "tailwind-merge";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button = ({
    className = "",
    type = "button",
    children = <p></p>,
    ...props
}: ButtonProps) => {
    return (
        <>
            <button
                className={twMerge(
                    `text-white bg-orange-400 rounded-md px-2 h-10 flex gap-2 items-center ${className}`
                )}
                {...props}
                type={type}
            >
                {children}
            </button>
        </>
    );
};
