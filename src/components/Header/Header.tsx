import Link from "next/link";
import { Button } from "../Button";
import { AiOutlineLogin } from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
    return (
        <header className="flex px-5 gap-2 py-3 items-center justify-evenly">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-orange-400 via-orange-600 to-orange-500 text-2xl font-title ">
                Na Braza
            </h1>
            <nav className="flex gap-10 items-center ">
                <HeaderLinks />
            </nav>
            <div className="flex items-center gap-10">
                <Link href={"auth/login"}>
                    <Button className="w-[154px] hover:bg-white hover:text-orange-700 transition-all">
                        <AiOutlineLogin size={22} />
                        Entrar
                    </Button>
                </Link>
                <Link href={"auth/register"}>
                    <Button className="bg-black border-2 border-white w-[154px] hover:bg-white hover:text-black transition-all">
                        <HiPencilSquare size={22} />
                        <p>Cadastre-se</p>
                    </Button>
                </Link>
            </div>
        </header>
    );
}
