import { steps } from "../../data";
import Caption from "../Caption";
import DownloadButton from "../DownloadButton";

function Steps() {
  return (
    <section className="w-full flex justify-center bg-[#FAFAFA] px-30 py-10 sm:px-25 max-sm:px-10 items-center">
      <div className="w-9/12 max-sm:w-full flex flex-col px-10 py-10 space-y-10 items-center shadow-md">
        <Caption>HOW IT WORKS</Caption>

        <h1
          className="font-semibold lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          4 Simple Steps to Get Started
        </h1>

        <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-4 border-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-full rounded-xl px-4 py-4 space-y-4 border border-slate-200"
            >
              <h1 className="text-md font-semibold">{step.id}. </h1>
              <h1
                className="w-full text-xl font-semibold"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {step.header}
              </h1>

              <p className="text-xs text-slate-500">{step.text}</p>

              <img
                src={step.icon}
                alt="step-image"
                className="w-40 m-auto object-contain"
              />
            </div>
          ))}
        </div>

        <DownloadButton />
      </div>
    </section>
  );
}

export default Steps;
