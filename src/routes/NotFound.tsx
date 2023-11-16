import { Link } from "react-router-dom";
import notFoundImg from "../assets/not_found_card.png";

const NotFound: React.FC = () => {
  return (
    <>
      <Link to="/">
        <div className="bg-[#ff0000] h-screen flex items-center justify-center mouse-pointer">
          <img
            src={notFoundImg}
            alt="not found"
            className="max-w-full max-h-full w-auto h-auto"
          />
        </div>
      </Link>
    </>
  );
};
export default NotFound;
