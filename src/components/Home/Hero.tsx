import HeroText from "./HeroText";
import PizzaSlider from "./PizzaSlider/PizzaSlider";

export default function Hero() {
    return (
        <section className="flex items-center justify-evenly animate-slideup">
            <HeroText />
            <PizzaSlider />
        </section>
    );
}
