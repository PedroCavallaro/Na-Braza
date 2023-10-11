"use client";

import { CartProvider } from "@/contexts/CartContext";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    return <CartProvider>{children}</CartProvider>;
};
