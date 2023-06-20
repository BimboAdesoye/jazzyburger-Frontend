import logo from "../assets/jazzyburgerlogo.svg";
import location from "../assets/jazzyburgerLocationIcon.svg";
import bell from "../assets/jazzyburgerBellIcon.svg";
import profile from "../assets/jazzyburgerProfileIcon.svg";
import arrowdown from "../assets/jazzyburgerArrowDownIcon.svg";
import cartIcon from "../assets/jazzyburgerCartIcon.svg";

const Navbar = () => {
  return (
    <div className="container d-flex justify-content-between className='mb-0'">
      <div className="brand d-flex align-items-center gap-4">
        <img src={logo} alt="" />
        <img className="d-none d-lg-block" src={location} alt="" />
        <p className="mb-0 mt-1 location d-none d-lg-block">
          Lagos, Nigeria
        </p>
      </div>
      <div className="d-flex align-items-center gap-5">
        <div className="d-flex align-items-end gap-3">
          <img src={bell} alt="" />
          <p className="mb-0 all-products d-none d-lg-block">All Products</p>
        </div>
        <div className="d-flex align-items-end gap-2">
          <img src={profile} alt="" />
          <p className="mb-0 guests d-none d-lg-block">Hi, Guests</p>
          <img className="mb-1 d-none d-lg-block" src={arrowdown} alt="" />
        </div>
        <div>
          <img src={cartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
