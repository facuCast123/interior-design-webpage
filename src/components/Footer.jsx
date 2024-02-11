import "./Footer.css";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaArrowRightLong,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h1 className="footer__title">InDesign</h1>
        <p className="footer__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repellendus necessitatibus error cumque expedita officiis hic
          reprehenderit ipsum! Inventore harum minima eveniet ducimus. Tempore a
          adipisci ipsum error non nisi.
        </p>
        <span className="footer__label">Copyright &#169; 2024 InDesign</span>
      </div>

      <div className="footer__contacts">
        <h2 className="footer__contacts__heading">Sign Up to Our Newsletter</h2>
        <span className="footer__form">
          <input
            className="footer__input"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="footer__button" type="submit">
            <FaArrowRightLong />
          </button>
        </span>
        <ul className="footer__links">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Our Services</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <span className="footer__socials">
        <a href="#">
          <FaSquareFacebook />
        </a>
        <a href="#">
          <FaSquareXTwitter />
        </a>
        <a href="#">
          <FaSquareInstagram />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
