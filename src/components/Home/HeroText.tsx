import { Button } from "../Button";
import { MdShoppingBag } from "react-icons/md";

interface HeroTextProps {
    name: string;
    description: string;
}

export default function HeroText({ description, name }: HeroTextProps) {
    return (
        <section className="text-white flex flex-col gap-6 mb-10">
            <h1 className="text-3xl font-bold ">Pra Hoje!</h1>
            <h2 className="text-2xl">{name}</h2>
            <p className="w-[28rem] text-lg font-light">{description}</p>
            <span className="flex gap-2 text-lg">
                Apenas
                <p className="font-bold text-orange-400">R$ 20,00</p>
            </span>
            <Button className="w-[303px] text-white flex items-center justify-center h-[70px]  bg-gradient-to-l from-orange-400 via-orange-600 to-orange-700">
                <MdShoppingBag size={30} />
                <p>Comprar agora</p>
            </Button>
        </section>
    );
}
