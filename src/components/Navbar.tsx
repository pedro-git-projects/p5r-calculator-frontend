import "../styles/hover.css";
import "../styles/nav.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="overflow-x-auto bg-[#732424] p-4 flex justify-center shadow-md">
      <Link to="/" className="px-4">
        <div className="text-gray-100 hover:text-[#f2e852]">Compendium</div>
      </Link>
      <Link to="/skill-list" className="px-4">
        <div className="text-gray-100 hover:text-[#f2e852]">Skills</div>
      </Link>
      <Link to="/search" className="px-4">
        <div className="text-gray-100 hover:text-[#f2e852]">Search</div>
      </Link>
    </nav>
  );
};

export default Navbar;
