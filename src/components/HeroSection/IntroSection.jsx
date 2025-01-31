import { trustedStudents } from "../../data";
import storeIcon from "../../assets/storeIcon.svg";
import playIcon from "../../assets/play-circle.svg";
import HeroImage from "./HeroImage";
import Caption from "../Caption";
import Button from "../Button";

function IntroSection() {
  return (
    <section className="w-full px-30 py-10 sm:px-25 max-sm:px-10 gap-y-8 flex flex-col items-center border-0">
      <Caption>SECURE. GLOBAL. FAST</Caption>
      <h1
        className="text-center font-bold text-6xl max-sm:text-2xl text-[#2F2F2F] border-0"
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          textShadow: "3px 3px 6px gray",
        }}
      >
        Reliable Payment Solutions for International Eduaction
      </h1>
      <div className="w-2/3 max-sm:w-full justify-center flex text-slate-500 border-0">
        <p className="text-center max-sm:text-sm border-0">
          The easiest and fasted way to pay tuition and fees to educational
          institutions, businesses, and government agencies worldwide.
        </p>
      </div>

      <div className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:space-y-2 lg:space-x-4 border-0">
        <Button className="w-fit bg-[#AFE274] py-3 px-4 rounded-full cursor-pointer">
          <div className="flex flex-row items-center content-center space-x-2 border-0">
            <span className="text-sm font-medium">Download app</span>
            <img src={playIcon} alt="store-logo" />
          </div>
        </Button>
        <Button className="w-fit bg-[#F4F8EF] py-3 px-4 items-center rounded-full cursor-pointer border border-[#F4F8EF]">
          <div className="flex flex-row items-center content-center space-x-2 border-0">
            <span className="text-sm font-medium">Watch Demo</span>
            <img src={storeIcon} alt="store-logo" />
          </div>
        </Button>
      </div>

      <div className="flex flex-row items-center space-x-2 -mt-4 border-0">
        <div className="flex flex-row -space-x-3 border-0">
          {trustedStudents.map((student) => (
            <div key={student.id}>
              <img
                src={student.image}
                alt="student"
                width={30}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <span className="text-slate-500 text-xs font-sans font-medium">
          Trusted by 3k+ Students Globally
        </span>
      </div>

      <HeroImage />
    </section>
  );
}

export default IntroSection;
