import heroImage from "../assets/heroImage.png";
import trackStarLogo from "../assets/trackstarLogo.svg";
function HeroImage() {
  return (
    <section className="relative border">
      <img src={heroImage} alt="hero-image" className="w-full object-contain" />
      <div
        className="w-40 bg-white absolute flex flex-row justify-between rounded-md items-center space-x-4 py-2 px-2 
        shadow-md top-20 left-56 border-0 motion-safe:required:"
      >
        <img src={trackStarLogo} alt="trackstar-logo" />
        <p className="text-slate-800 border-0">Backed by Trackstars</p>
      </div>
    </section>
  );
}

export default HeroImage;
