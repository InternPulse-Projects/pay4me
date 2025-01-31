import propTypes from "prop-types";
import lightning from "../assets/lightning.svg";
function Caption({ children }) {
  return (
    <span
      className="w-fit flex flex-row gap-x-1.5 bg-[#E9F8D8] text-slate-600 text-xs max-sm:text-sm px-2 py-1 font-semibold rounded-full 
      border border-[#A0C07B]"
    >
      <img src={lightning} alt="lightning-logo" />
      {children}
    </span>
  );
}

Caption.propTypes = {
  children: propTypes.node.isRequired,
};

export default Caption;
