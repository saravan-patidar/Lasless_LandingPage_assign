import Logo from "../assets/Logo.svg";
const NavBar = () => {
  return (
    <div class="container py-4 px-16 mx-auto border-2">
      <nav className="d-flex justify-content-between align-items-center ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="nav">
          <li className="nav-item px-3">About</li>
          <li className="nav-item px-3">Features</li>
          <li className="nav-item px-3">Pricing</li>
          <li className="nav-item px-3">Testimonials</li>
          <li className="nav-item px-3">Help</li>
        </ul>
        <div>
          <button className="px-4 py-2 border-0 bg-transparent fw-bold  mx-4">
            Sign in
          </button>
          <button className="px-5 py-2 rounded-5 fw-bold mx-4">Sign up</button>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
