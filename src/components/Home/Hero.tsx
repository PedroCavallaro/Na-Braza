"use client";
import { Products } from "@/@types/types";
import HeroText from "./HeroText";
import PizzaSlider from "./PizzaSlider/PizzaSlider";
import { useState } from "react";
import { formatCurrency } from "@/services/currency";

interface HeroProps {
    products: Array<Products>;
}
export default function Hero({ products }: HeroProps) {
    const [index, setIndex] = useState(0);
    console.log(index);
    function handleSlideChange(newIndex: number) {
        setIndex(newIndex);
    }
    return (
        <section className="flex items-center justify-evenly animate-slideup">
            <HeroText
                description={products[index].description}
                name={products[index].name}
                price={formatCurrency(products[index].price)}
            />
            <PizzaSlider
                products={products}
                handleSlideChange={handleSlideChange}
            />
        </section>
    );
}
