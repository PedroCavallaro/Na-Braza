"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PizzaCard from "../PizzaCard";
import "swiper/css";
import "swiper/css/navigation";
import "./PizzaSlider.css";
import { Product } from "@/@types/types";

interface PizzaSliderProps {
    products: Array<Product>;
    handleSlideChange: (index: number) => void;
}
export default function PizzaSlider({
    products,
    handleSlideChange,
}: PizzaSliderProps) {
    return (
        <section className="w-[37rem]">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                }}
                onSlideChange={(slide) => {
                    handleSlideChange(slide.activeIndex);
                }}
            >
                {products.map(({ evaluation, name, setup_time }, index) => {
                    return (
                        <SwiperSlide key={index.toString()}>
                            <PizzaCard
                                evaluation={evaluation}
                                name={name}
                                setup_time={setup_time}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
