"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartContext {
    isCartOpen: boolean;
    handleCart: () => void;
}

const CartContext = createContext({} as CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCart = () => {
        setIsCartOpen((prev) => !prev);
    };
    return (
        <CartContext.Provider value={{ handleCart, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext);
