import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div id="help" className="footer ">
      <div className="container flex-wrap flex-md-nowrap  d-flex align-items-start justify-content-between p-3  ">
        <div className="col-5 d-flex flex-column align-items-start gap-3  ">
          <img src={Logo} alt="" />
          <p>
            <span className="fw-bold">LaslesVPN</span> is a private virtual
            network that has unique features and has high security.
          </p>
          <div className="d-flex align-items-center gap-2 p-3">
            <span className="p-2 bg-white rounded-5">
              <FaFacebookF className="icons " />
            </span>
            <span className="p-2 bg-white rounded-5">
              <FaTwitter className="icons " />
            </span>
            <span className="p-2 bg-white rounded-5">
              <FaInstagram className="icons " />
            </span>
          </div>
          <p>©2020LaslesVPN</p>
        </div>
        <div>
          <h5>Product</h5>
          <ul className="p-0 d-flex flex-column gap-3">
            <li>Download </li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5>Engage</h5>
          <ul className="p-0 d-flex flex-column gap-3">
            <li>LaslesVPN ? </li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h5>Earn Money</h5>
          <ul className="p-0 d-flex flex-column gap-3">
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
