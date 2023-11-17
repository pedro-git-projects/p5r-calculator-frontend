import "../styles/hover.css";
import "../styles/table.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
         <nav className="overflow-x-auto bg-[#732424] p-4 flex justify-center shadow-md">
            <Link to="/" className="px-4">
                <div className="text-gray-100">Compendium</div>
            </Link>
            <Link to="/skill-list" className="px-4">
                <div className="text-gray-100">Skills</div>
            </Link>
            <Link to="/search" className="px-4">
                <div className="text-gray-100">Search</div>
            </Link>
        
        </nav>
    );
};

export default Navbar;
