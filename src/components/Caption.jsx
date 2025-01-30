import propTypes from "prop-types";
function Caption({ children }) {
  return (
    <span
      className="w-fit bg-[#E9F8D8] text-slate-600 text-xs max-sm:text-sm px-4 py-1 font-semibold rounded-full 
      border border-[#A0C07B]"
    >
      {children}
    </span>
  );
}

Caption.propTypes = {
  children: propTypes.node.isRequired,
};

export default Caption;
