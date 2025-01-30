import Caption from "../Caption";

function Testimonials() {
  return (
    <section className="w-full flex justify-center lg:px-28 py-10 sm:px-20 max-sm:px-5 border">
      <div className="w-full flex flex-col space-y-10 py-4 border">
        <Caption>TESTIMONIALS</Caption>

        <h1
          className="w-5/12 max-sm:w-3/4 font-semibold lg:text-4xl max-sm:text-2xl md:text-2xl sm:text-2xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Don&apos;t take our words for it, Take theirs.
        </h1>
      </div>
    </section>
  );
}

export default Testimonials;
