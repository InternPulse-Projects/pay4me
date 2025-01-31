import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="flex flex-row justify-center text-[#F6F6F6] border-0">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "relative text-sm px-2 py-2 border-b-2 font-sans"
            : "text-sm px-2 py-2 font-sans hover:text-gray-100"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-sm px-2 py-2 border-b-2 font-sans "
            : "text-sm px-2 py-2 font-sans hover:text-gray-100"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          isActive
            ? "text-sm px-2 py-2 border-b-2 font-sans"
            : "text-sm px-2 py-2 font-sans hover:text-gray-100"
        }
      >
        Support
      </NavLink>
    </nav>
  );
}

export default Nav;
