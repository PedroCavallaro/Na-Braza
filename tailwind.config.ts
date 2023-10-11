import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: "var(--font-title)",
                body: "var(--font-body)",
            },
        },
        keyframes: {
            slideup: {
                "0%": { transform: "translateY(150px)", opacity: "0.5" },
                "100%": { transform: "translateY(0px)", opacity: "1" },
            },
        },
        animation: {
            slideup: "slideup 1s ease",
        },
    },
    plugins: [],
};
export default config;
