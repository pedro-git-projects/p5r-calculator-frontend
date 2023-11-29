import { Link } from "react-router-dom";
import "./AnimatedLink.tsx";
import "../styles/animatedlink.css";

interface AnimatedLinkProps {
  text: string;
  route: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ text, route }) => {
  return (
    <div className="link-wrapper">
      <span className="fallback">{text}</span>
      <div className="text-wrapper">
        <Link to={route}>
          <div className="normal">{text}</div>
        </Link>
        <Link to={route}>
          <div className="active">{text}</div>
        </Link>
      </div>
      <div className="shape-wrapper">
        <div className="shape red-fill jelly">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 108.1 47"
            enableBackground="new 0 0 108.1 47"
          >
            <polygon fill="#FF0000" points="0,7.1 127.3,0 32.3,64 4.8,58.2" />
          </svg>
        </div>
        <div className="shape cyan-fill jelly">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 108.1 47"
            enableBackground="new 0 0 108.1 47"
          >
            <polygon fill="#00FFFF" points="14,0.5 127.4,0 77.4,164 2.3,61.1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLink;
