import { faq } from "../../data";
import Caption from "../Caption";
import Accordion from "./Accordion";
import faqUser from "/images/testimonials/FAQUser.jpg";

function FAQ() {
  return (
    <section className="w-full flex justify-center lg:px-28 py-10 sm:px-20 max-sm:px-5 border-0">
      <div className="w-full flex flex-col space-y-10 py-4 relative border-0">
        <Caption>FAQS</Caption>

        <h1
          className="w-5/12 flex flex-col max-sm:w-3/4 gap-y-2 font-semibold lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Got Questions?
          <span
            className="text-xl font-normal text-slate-500"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            We&apos;ve got answers
          </span>
        </h1>

        <div className="bg-[#FCFCFC] flex flex-row max-sm:flex-col sm:flex-col sm:py-4 space-y-2 space-x-10 justify-between border-0">
          <img
            src={faqUser}
            alt="faq-user"
            className="w-80 sm:self-center object-contain"
          />

          <div className="w-full flex flex-col px-4 space-y-4 rounded-md self-center border border-[#D8D8D8]">
            {faq.map((f) => (
              <Accordion key={f.id} faq={f} num={f.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
