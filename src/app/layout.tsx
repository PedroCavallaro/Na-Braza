import Cart from "@/components/Cart/Cart";
import "./globals.css";
import type { Metadata } from "next";
import { Shrikhand, Roboto } from "next/font/google";
import { Providers } from "@/providers/Providers";

const roboto = Roboto({
    variable: "--font-body",
    subsets: ["latin"],
    weight: "400",
});
const shrinkhand = Shrikhand({
    variable: "--font-title",
    subsets: ["latin"],
    weight: "400",
});
export const metadata: Metadata = {
    title: "Na Braza",
    description: "Na Braza Pizzarria",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body
                className={`${shrinkhand.variable} ${roboto.variable} bg-black text-white`}
            >
                <Providers>
                    <Cart />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
