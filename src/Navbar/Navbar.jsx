import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa6";
import Logo from "/image/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-32">
      <img src={Logo} alt="" className="w-20" />

      <ul className="flex items-center gap-x-5">
        <li>
          <Link to="/" className="flex items-center ml-1">
            Home
            <FaAngleDown />
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center ml-1">
            About
            <FaAngleDown />
          </Link>
        </li>
        <li>
          <Link to="/service" className="flex items-center ml-1">
            Service
            <FaAngleDown />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
