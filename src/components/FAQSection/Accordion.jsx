import { useState } from "react";
import propTypes from "prop-types";

function Accordion({ faq, num }) {
  const { question, answer } = faq;

  console.log(question);
  const [isExpanded, setIsExpanded] = useState(null);

  const open = num === isExpanded;

  function handleSelected() {
    setIsExpanded(open ? null : num);
  }

  return (
    <div
      className="py-4 rounded-md cursor-pointer p-2 border-0"
      onClick={handleSelected}
    >
      <h1
        className=" w-full text-lg font-semibold p-2"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        {question}
      </h1>

      {open && <p className="text-slate-500 text-sm p-2">{answer}</p>}
    </div>
  );
}

Accordion.propTypes = {
  faq: propTypes.object.isRequired,
  num: propTypes.number.isRequired,
};

export default Accordion;
