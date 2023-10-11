import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import Image from "next/image";
import wave1 from "../../public/assets/wave1.svg";
export default function Home() {
    return (
        <main className="flex flex-col gap-14">
            <Header />
            <Hero />
            <section className="flex">
                <div className="absolute right-0">
                    <Image src={wave1} alt="wave1" width={200} height={200} />
                </div>
            </section>
        </main>
    );
}
