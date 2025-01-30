import heroImage from "../assets/heroImage.png";
import trackStarLogo from "../assets/trackstarLogo.svg";
import googleIcon from "../assets/googleIcon.svg";
import dollarSym from "../assets/dollarSym.svg";
import withdraw from "../assets/withdraw.svg";
import add from "../assets/add.svg";
import Eye from "../assets/Eye.svg";
import stars from "../assets/stars.svg";

function HeroImage() {
  return (
    <section className="relative w-[80%] space-y-4 border-0">
      <img src={heroImage} alt="hero-image" className="w-full object-contain" />
      <div
        className="w-40 bg-white absolute flex flex-row justify-between rounded-md items-center space-x-4 py-2 px-2 
        shadow-md top-20 left-40 max-sm:hidden border-0 -motion-translate-y-loop-50 motion-duration-[3s] motion-ease-spring-smooth"
      >
        <img src={trackStarLogo} alt="trackstar-logo" />
        <p className="text-slate-800 border-0">Backed by Trackstars</p>
      </div>

      <div
        className="w-56 bg-white absolute flex flex-row justify-between rounded-md items-center space-x-4 py-2 px-2 
        shadow-md bottom-30 left-20 max-sm:hidden border-0 -motion-translate-y-loop-50 motion-duration-[3s] motion-ease-spring-smooth"
      >
        <img src={googleIcon} alt="google-logo" />
        <span className="flex flex-col">
          <img src={stars} alt="stars" />
          <p className="text-slate-800 border-0">5 star Google rating</p>
        </span>
      </div>

      <div
        className="w-60 bg-white absolute flex flex-col justify-between rounded-md items-center space-y-2 px-4 py-4 shadow-md top-1/2 right-5 
        max-sm:hidden -motion-translate-y-loop-50 motion-duration-[4s] motion-ease-spring-smooth"
      >
        <span className="w-full flex flex-row justify-between text-xs text-slate-500">
          <p>Wallet Balance</p>
          <img src={dollarSym} alt="dollar-currency" />
        </span>

        <span className="w-full flex flex-row space-x-2 items-center border-0">
          <h1 className="font-semibold text-xl border-0">$ 22,850.00</h1>
          <img src={Eye} alt="eye-icon" />
        </span>

        <div className="w-full flex flex-row space-x-4 text-xs font-sans items-center">
          <span className="flex flex-row items-center justify-center gap-x-0.5 rounded-full py-2 px-2 shadow-md">
            <img src={add} alt="fund-wallet" />
            <small>Fund Wallet</small>
          </span>
          <span className="flex flex-row items-center justify-center gap-x-0.5 rounded-full py-2 px-4 shadow-md">
            <img src={withdraw} alt="withdraw" />
            <small>Withdraw</small>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
