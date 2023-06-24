import logo from "../assets/jazzyburgerlogo.svg";
import location from "../assets/jazzyburgerLocationIcon.svg";
import bell from "../assets/jazzyburgerBellIcon.svg";
import profile from "../assets/jazzyburgerProfileIcon.svg";
import arrowdown from "../assets/jazzyburgerArrowDownIcon.svg";
import cartIcon from "../assets/jazzyburgerCartIcon.svg";
// import Cart from "../components/Cart";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="mycontainer d-flex justify-content-between mb-0 mt-3">
      <div className="brand d-flex align-items-center gap-4">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="d-flex gap-2 align-items-center">
          <img
            className="d-none d-md-block d-lg-block location-icon"
            src={location}
            alt=""
          />
          <p className="mb-0 mt-1 location d-md-block d-none d-lg-block">
            Lagos, Nigeria
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center nav-left">
        <div className="d-lg-flex align-items-end gap-3">
          <Link to="/CheckOut">
            <img className="bell" src={bell} alt="" />
          </Link>
          <p className="mb-0 all-products d-none d-lg-block fw-bold">
            All products
          </p>
        </div>
        <div className="d-flex align-items-end gap-2">
          <img className="profile" src={profile} alt="" />
          <p className="mb-0 guest d-none d-md-block d-lg-block">Hi, Guest</p>
          <img
            className="mb-1 d-none d-lg-block arrow-down"
            src={arrowdown}
            alt=""
          />
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
