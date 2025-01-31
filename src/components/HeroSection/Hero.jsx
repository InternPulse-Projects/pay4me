import Header from "../HeaderSection/Header";
import Brands from "./Brands";
import IntroSection from "./IntroSection";

function Hero() {
  return (
    <section className="bg-[url(/images/Hero.png)] py-10 bg-green-100">
      <Header />
      <IntroSection />
      <Brands />
    </section>
  );
}

export default Hero;
