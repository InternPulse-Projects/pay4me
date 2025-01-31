import Blog from "../components/BlogSection/Blog";
import Brands from "../components/Brands";
import Download from "../components/DownloadSection/Download";
import FAQ from "../components/FAQSection/FAQ";
import Features from "../components/FeaturesSection/Features";
import FooterNav from "../components/FooterNavSection/FooterNav";
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
      <Blog />
      <Download />
      <FooterNav />
    </section>
  );
}

export default Home;

// style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
