import { AuthTypeObj } from "@/@types/types";
import AuthForm from "@/components/Auth/AuthForm";
import { redirect } from "next/navigation";
import waveAuth from "../../../../public/assets/waveAuth.svg";
import Image from "next/image";
export default function Auth({
    params,
}: {
    params: { type: keyof AuthTypeObj };
}) {
    if (params.type !== "register" && params.type !== "login") {
        redirect("/");
    }
    const { type } = params;
    return (
        <main className="w-full">
            <section className="flex relative h-screen">
                <div className="w-[50%] text-white">
                    <p>oi</p>
                </div>
                <div className="">
                    <Image
                        src={waveAuth}
                        width={100}
                        height={100}
                        alt="wave"
                        className="h-full w-[40rem] fixed -top-o  -right-20 "
                    />
                    <p>oi</p>
                </div>
            </section>
        </main>
    );
}
