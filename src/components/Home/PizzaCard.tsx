import Image from "next/image";
import { BsFillStopwatchFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { useCart } from "@/contexts/CartContext";
export default function PizzaCard() {
    const { handleCart } = useCart();
    return (
        <>
            <div
                className="flex flex-col items-center justify-center"
                onClick={handleCart}
            >
                <Image
                    draggable={false}
                    src={"/pizza.png"}
                    width={300}
                    height={200}
                    alt="pizza"
                    className="w-[20rem] z-20"
                />
                <div className=" bg-gradient-to-b from-orange-400 via-orange-600 to-orange-700 relative rounded-lg -top-20 w-[15rem] h-[12rem] flex flex-col px-2 gap-4">
                    <div className="mt-[5.5rem] px-2 flex items-center justify-between">
                        <p>Três Queijos</p>
                        <div className="flex gap-1 items-center">
                            <AiTwotoneStar />
                            <p>5</p>
                        </div>
                    </div>
                    <div className="bg-black text-white px-3 h-10 rounded-lg flex items-center gap-10">
                        <BsFillStopwatchFill />
                        <p>10 - 20 min</p>
                    </div>
                </div>
            </div>
        </>
    );
}
