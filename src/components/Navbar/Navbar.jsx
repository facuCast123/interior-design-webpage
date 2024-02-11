import "./Navbar.css";
import Headroom from "react-headroom";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  return (
    <Headroom
      style={{
        zIndex: 999,
      }}
    >
      <nav className="navbar">
        <span className="navbar__title">InDesign</span>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="navbar__icons">
          <FaAlignJustify id="menu-icon" />
          <FaXmark id="close-icon" />
        </label>

        <ul className="navbar__links">
          <li style={{ "--i": 1 }}>Home</li>
          <li style={{ "--i": 2 }}>About</li>
          <li style={{ "--i": 3 }}>Our Gallery</li>
          <li style={{ "--i": 4 }}>Pricing</li>
          <li style={{ "--i": 5 }}>Services</li>
        </ul>

        <button className="navbar__button">Contact Us</button>
      </nav>
    </Headroom>
  );
};

export default Navbar;
