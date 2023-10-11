"use client";
import { BsChevronLeft } from "react-icons/bs";
import { Button } from "../Button";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
    const { isCartOpen, handleCart } = useCart();

    return (
        <section
            className={`${
                isCartOpen &&
                "w-[100vw] h-[100vh] fixed top-0 z-20 bg-black bg-opacity-50 "
            }`}
        >
            <div
                className={`${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                } bg-black h-full fixed w-[30rem] top-0 right-0 z-50 px-2 flex  flex-col gap-3 transition duration-200 ease-in-out`}
            >
                <div className=" mt-5 flex items-center gap-2">
                    <button onClick={handleCart}>
                        <BsChevronLeft size={28} />
                    </button>
                    <p>Continuar comprando</p>
                </div>
                <hr className="bg-white h-[1px]" />
                <p>po</p>
                <hr className="bg-white h-[0.9px]" />
                <div className="flex justify-between">
                    <p>Total</p>
                    <p>R$ 50,00</p>
                </div>
                <Button className="flex items-center justify-center bg-gradient-to-l from-orange-400 via-orange-600 to-orange-700">
                    <p>Finalizar Compra</p>
                </Button>
            </div>
        </section>
    );
}
