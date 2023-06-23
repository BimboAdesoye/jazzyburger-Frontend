import { useState } from "react";
import jazzyImg from "../assets/jazzyburgerHeroImg.svg";
import addIcon from "../assets/jazzyburgerAddToCartIcon.svg";
import foodgroup from "../assets/jazzyburgerFoodGroup.svg";
import naira from "../assets/jazzyburgerNairaIcon.png";
import like from "../assets/jazzyburgerLikeIcon2.svg";
import heartIcon from "../assets/red-heart-icon.svg";
import herobanner from "../assets/jazzyburgerherobanner.jpg";
import BarLoader from "react-spinners/ClipLoader";
import UseFetch from "../Hooks/UseFetch";
// import { Link } from "react-router-dom";

const Home = () => {
  const { data, loading } = UseFetch(
    "https://jazzyburger-abimbola.onrender.com/burger/findAll"
  );
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mycontainer mt-4 mb-5">
      <div className="">
        <img className="w-100 hero-banner" src={herobanner} alt="" />
      </div>
      <div className="row mt-5 h-100 hero">
        <div className="col-lg-4 col-md-3 jazzy-img d-none d-md-block d-lg-block h-100">
          <img className="img-fluid w-100" src={jazzyImg} alt="" />
        </div>
        <div className="col-lg-8 col-md-9 hero">
          <h2> {loading && <BarLoader color={"green"} size={80} />}</h2>
          <div className="card-container m-auto row">
            {data.map((datum) => {
              const { _id, title, price, image } = datum;
              return (
                <div
                  key={_id}
                  className="border cards p-0 w-100 col-md-6 col-sm-6"
                >
                  {/* <Link to={`/SingleProduct/${_id}`}> */}
                  <div className="card-img">
                    <img
                      className="img-fluid w-100 burger-img"
                      src={image}
                      alt=""
                    />
                    <div onClick={handleClick} className="icon-circle">
                      <img src={clicked ? like : heartIcon} alt="" />
                    </div>
                  </div>
                  {/* </Link> */}
                  <div className="card-body p-2 burger-body">
                    <p className="burger-title mb-2 mt-1 fw-bold">{title}</p>
                    <p className="burger-total mb-2">Total Price</p>
                    <p className="burger-price mb-2">
                      <img className="img-fluid" src={naira} alt="" />
                      <span>{price}.0</span>
                    </p>
                    <img
                      className=" mb-1 img-fluid food-group"
                      src={foodgroup}
                      alt=""
                    />
                    <button className="cart-btn d-flex justify-content-center align-items-center mb-1">
                      <img className="" src={addIcon} alt="" />
                      <span className="cart-btn-font">Add To Cart</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
