import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import Image from "next/image";
import wave1 from "../../public/assets/wave1.svg";
import { getAllWhitoutPromo, getAllWithPromo } from "@/services/products";
import PizzaCard from "@/components/Home/PizzaCard";

export default async function Home() {
    const [productsWithouPromo, allProducts] = await Promise.all([
        getAllWhitoutPromo(),
        getAllWithPromo(),
    ]);

    return (
        <main className="flex flex-col gap-14">
            <Header />
            <Hero products={allProducts} />

            <section className="flex flex-wrap gap-x-16 ">
                {productsWithouPromo.map(
                    ({ evaluation, name, setup_time, id }) => (
                        <PizzaCard
                            evaluation={evaluation}
                            name={name}
                            setup_time={setup_time}
                            key={id}
                        />
                    )
                )}

                {productsWithouPromo.map(
                    ({ evaluation, name, setup_time, id }) => (
                        <PizzaCard
                            evaluation={evaluation}
                            name={name}
                            setup_time={setup_time}
                            key={id}
                        />
                    )
                )}
                <div className="absolute right-0">
                    <Image src={wave1} alt="wave1" width={200} height={200} />
                </div>
            </section>
        </main>
    );
}
