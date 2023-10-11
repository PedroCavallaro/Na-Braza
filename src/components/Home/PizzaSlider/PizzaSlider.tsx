"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PizzaCard from "../PizzaCard";
import "swiper/css";
import "swiper/css/navigation";
import "./PizzaSlider.css";

export default function PizzaSlider() {
    return (
        <section className="w-[37rem]">
            <Swiper
                modules={[Navigation]}
                loop
                navigation={{
                    enabled: true,
                }}
                onSlideChange={(slide) => {}}
            >
                <SwiperSlide>
                    <PizzaCard />
                </SwiperSlide>
                <SwiperSlide>
                    <PizzaCard />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
