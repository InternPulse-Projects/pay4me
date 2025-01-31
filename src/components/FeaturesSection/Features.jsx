import { features } from "../../data";
import Button from "../Button";
import Caption from "../Caption";
import barcodeScan from "../../assets/barcode-scan.svg";

function Features() {
  return (
    <section className="w-full flex flex-col bg-[#E7FBCF] px-30 py-10 sm:px-25 max-sm:px-10 border-0 relative">
      <div className="absolute w-7/12 max-sm:hidden right-0 top-4 border-0">
        <img
          src="/images/logoLarge.png"
          alt="large-logo"
          className="object-contain"
        />
      </div>

      <div className="lg:px-20 lg:py-10 max-sm:px-2 lg:-mb-20">
        <div className="flex self-start py-5 max-sm:py-5 border-0">
          <Caption className="border-0">FEATURES</Caption>
        </div>

        <p
          className="relative w-full lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl max-sm:py-4 lg:mb-8 lg:mt-6 
          md:py-4 font-semibold z-50"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          What Truly sets us apart
        </p>

        <div className="relative w-full flex flex-row max-sm:flex-col max-sm:space-y-4 space-x-4 gap-x-6 lg:py-5 z-50 lg:mb-10 border-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-xl px-4 py-10 space-y-6"
            >
              <img src={feature.icon} alt="icon" />
              <h1
                className="w-full text-xl font-semibold"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {feature.header}
              </h1>

              <p className="text-xs text-slate-500">{feature.text}</p>

              <Button
                className="w-fit bg-[#AFE274] py-3 px-4 text-sm items-center rounded-full cursor-pointer 
                inset-shadow-2xs inset-shadow-[#A4C47D] border-2 border-[#F4F8EF]"
              >
                <div className="flex flex-row space-x-2">
                  <span>Download app</span>
                  <img src={barcodeScan} alt="barcode-scan" />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
