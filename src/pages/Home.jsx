import Brands from "../components/Brands";
import FAQ from "../components/FAQSection/FAQ";
import Features from "../components/FeaturesSection/Features";
import IntroSection from "../components/IntroSection";
import Offer from "../components/OfferSection/Offer";
import Steps from "../components/StepsSection/Steps";
import Testimonials from "../components/TestimonialsSection/Testimonials";
import Video from "../components/VideoSection/Video";

function Home() {
  return (
    <section className="border-0">
      <IntroSection />
      <Brands />
      <Features />
      <Steps />
      <Offer />
      <Video />
      <Testimonials />
      <FAQ />
    </section>
  );
}

export default Home;

// style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
