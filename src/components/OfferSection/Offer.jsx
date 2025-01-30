import { offers } from "../../data";
import Caption from "../Caption";
import DownloadButton from "../DownloadButton";

function Offer() {
  return (
    <section className="w-full flex justify-center bg-[url(/images/Offers.png)] px-30 py-10 sm:px-25 max-sm:px-10 items-center">
      <div className="flex flex-col items-center space-y-10 border">
        <Caption>WHAT WE OFFER</Caption>

        <h1
          className="w-1/2 max-sm:w-3/4 font-semibold text-white text-center lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Simplified Payments for Your Relocation Dreams
        </h1>

        <div className="w-fit flex flex-row max-sm:flex-col justify-center gap-x-4 max-sm:space-y-4 border-white">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="w-80 px-4 py-10 space-y-6 mt-0 rounded-xl relative"
              style={{ background: offer.background }}
            >
              <img
                src={offer.icon}
                alt="offer-image"
                className="object-contain"
              />
              <h1
                className="text-2xl font-semibold"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {offer.header}
              </h1>
              <p className="text-xs text-slate-500">{offer.text}</p>

              <div className="w-fit flex flex-row gap-10 border-0">
                <img
                  src={offer.stanford || offer.sevis}
                  alt="stanford-uni-sevis"
                  className="w-25 m-auto object-contain"
                />
                <img
                  src={offer.uniGh || offer.usVisa}
                  alt="uni-ghana-usVisa"
                  className="w-25 m-auto object-contain"
                />
              </div>

              <div className="w-fit flex flex-row gap-8 border-0">
                {offer.byu && (
                  <img
                    src={offer.byu}
                    alt="byu"
                    className="w-12 m-auto object-contain"
                  />
                )}
                {offer.wes && (
                  <img
                    src={offer.wes}
                    alt="wes"
                    className="w-25 m-auto object-contain"
                  />
                )}
                {offer.id === 1 && (
                  <img
                    src={offer.uniLag}
                    alt="uni-lag"
                    className="w-12 m-auto object-contain"
                  />
                )}
              </div>

              <img
                src={offer.yellowLogo || offer.blueLogo}
                alt="logo"
                className="absolute w-30 m-auto object-contain right-0 bottom-0"
              />
            </div>
          ))}
        </div>

        <DownloadButton />
      </div>
    </section>
  );
}

export default Offer;
