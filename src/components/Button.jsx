import propTypes from "prop-types";
function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

Button.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Button;
