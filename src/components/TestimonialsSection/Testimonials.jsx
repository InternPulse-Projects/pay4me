import { useRef } from "react";
import { testimonials } from "../../data";
import Caption from "../Caption";
import rarr from "../../assets/arrow-right.svg";

function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full flex justify-center lg:px-28 py-10 sm:px-20 max-sm:px-5 border-0">
      <div className="w-full flex flex-col space-y-10 py-4 relative border-0">
        <Caption>TESTIMONIALS</Caption>
        <h1
          className="w-5/12 max-sm:w-3/4 font-semibold lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Don&apos;t take our words for it, Take theirs.
        </h1>

        <button
          onClick={() => scroll("right")}
          className="w-8 h-8 absolute z-50 bg-slate-200 flex items-center m-auto right-4 bottom-35 -translate-y-1/2 p-2 rounded-full shadow-md"
        >
          <img src={rarr} alt="right-arrow" />
        </button>

        <div
          ref={scrollRef}
          className="grid grid-flow-col space-x-6 overflow-x-auto scroll-smooth scrollbar-hide border-0"
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-72 rounded-xl relative border-0">
              <img
                src={t.image}
                alt={t.name}
                className="w-full rounded-xl object-contain"
              />

              <div className="absolute bottom-0 px-3 py-3 border-0">
                <h1 className="text-white font-sans font-normal">{t.name}</h1>
                <span className="text-white text-xs font-sans">{t.bio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
