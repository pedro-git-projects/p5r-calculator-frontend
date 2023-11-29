import "../styles/hover.css";
import "../styles/nav.css";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isLinkActive = (to: string): boolean => location.pathname === to;

  return (
    <nav className="overflow-x-auto bg-[#732424] p-4 flex justify-center shadow-md">
      <Link to="/" className={`px-4 ${isLinkActive("/") ? "active-link" : ""}`}>
        <div
          className={`${
            isLinkActive("/")
              ? "text-[#f2e852]"
              : "text-gray-100 hover:text-[#f2e852]"
          }`}
        >
          Compendium
        </div>
      </Link>
      <Link to="/skill-list" className="px-4">
        <div
          className={`${
            isLinkActive("/skill-list")
              ? "text-[#f2e852]"
              : "text-gray-100 hover:text-[#f2e852]"
          }`}
        >
          Skills
        </div>
      </Link>
      <Link
        to="/recipe-calculator"
        className={`px-4 ${
          isLinkActive("/recipe-calculator") ? "active-link" : ""
        }`}
      >
        <div
          className={`${
            isLinkActive("/recipe-calculator")
              ? "text-[#f2e852]"
              : "text-gray-100 hover:text-[#f2e852]"
          }`}
        >
          Calculator
        </div>
      </Link>
      <Link
        to="/search"
        className={`px-4 ${isLinkActive("/search") ? "active-link" : ""}`}
      >
        <div
          className={`${
            isLinkActive("/search")
              ? "text-[#f2e852]"
              : "text-gray-100 hover:text-[#f2e852]"
          }`}
        >
          Search
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
