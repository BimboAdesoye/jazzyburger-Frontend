import logo from "../assets/jazzyburgerlogo.svg";
import location from "../assets/jazzyburgerLocationIcon.svg";
import bell from "../assets/jazzyburgerBellIcon.svg";
import profile from "../assets/jazzyburgerProfileIcon.svg";
import arrowdown from "../assets/jazzyburgerArrowDownIcon.svg";
import cartIcon from "../assets/jazzyburgerCartIcon.svg";
import Cart from "../components/Cart";
import { useState } from "react";
import "../styles/Cart.css";

const Navbar = () => {
  const [className, setClassName] = useState(false);
  const regularClass = "cart";

  function handleMouseEnter() {
    setClassName(true);
  }

  function handleMouseLeave() {
    setClassName(false);
  }

  return (
    <div className="container d-flex justify-content-between className='mb-0'">
      <div className="brand d-flex align-items-center gap-4">
        <img className="logo" src={logo} alt="" />
        <img className="d-none d-lg-block" src={location} alt="" />
        <p className="mb-0 mt-1 location d-none d-lg-block">Lagos, Nigeria</p>
      </div>
      <div className="d-flex align-items-center nav-left">
        <div className="d-lg-flex align-items-end gap-3">
          <img className="bell" src={bell} alt="" />
          <p className="mb-0 all-products d-none d-lg-block">All Products</p>
        </div>
        <div className="d-lg-flex align-items-end gap-2">
          <img className="profile" src={profile} alt="" />
          <p className="mb-0 guests d-none d-lg-block">Hi, Guests</p>
          <img className="mb-1 d-none d-lg-block" src={arrowdown} alt="" />
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className="cartIcon" src={cartIcon} alt="" />
        </div>
        {/* <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Click Me
        </button> */}
      </div>
      {/* <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        <Cart
          className={`${regularClass} ${className ? "cart-active" : null}`}
        />
      </div> */}
    </div>
  );
};

export default Navbar;
