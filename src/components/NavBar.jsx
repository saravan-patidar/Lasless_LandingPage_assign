import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { FiAlignJustify } from "react-icons/fi";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const menuItems = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <div class="  py-4 px-md-16 mx-auto border-2  sticky-top  bg-white shadow-sm ">
      <nav className="position-relative  navbar navbar-expand-lg  d-flex container justify-content-between align-items-center ">
        <div>
          <img src={Logo} alt="" />
        </div>

        <ul
          className="nav d-md-flex mobileNav "
          style={{
            display: active == true ? "block  " : "none",
          }}
        >
          <li className="px-3 " onClick={() => setActive(!active)}>
            <a href="#" className="nav-item text-decoration-none ">
              About
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#feature" className="nav-item text-decoration-none ">
              Features
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#pricing" className="nav-item text-decoration-none ">
              Pricing
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#testimonials" className="nav-item text-decoration-none ">
              Testimonials
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#help" className="nav-item text-decoration-none ">
              Help
            </a>
          </li>
        </ul>

        <div className="d-flex gap-2 me-5">
          <button className="px-4 py-2 border-0 bg-transparent fw-bold  ">
            Sign in
          </button>
          <button className="px-4  py-sm-2 rounded-5 fw-bold button1">
            Sign up
          </button>
        </div>
        <FiAlignJustify
          className="position-absolute end-0 fs-2 d-md-none z-3  "
          onClick={menuItems}
        />
      </nav>
    </div>
  );
};
export default NavBar;
