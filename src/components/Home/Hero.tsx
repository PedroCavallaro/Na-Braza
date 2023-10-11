"use client";
import { Products } from "@/@types/types";
import HeroText from "./HeroText";
import PizzaSlider from "./PizzaSlider/PizzaSlider";
import { useState } from "react";

interface HeroProps {
    products: Array<Products>;
}
export default function Hero({ products }: HeroProps) {
    const [index, setIndex] = useState(0);
    function handleSlideChange(newIndex: number) {
        setIndex(newIndex);
    }
    return (
        <section className="flex items-center justify-evenly animate-slideup">
            <HeroText
                description={products[index].description}
                name={products[index].name}
            />
            <PizzaSlider
                products={products}
                handleSlideChange={handleSlideChange}
            />
        </section>
    );
}
