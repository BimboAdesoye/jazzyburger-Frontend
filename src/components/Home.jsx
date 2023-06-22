import { useState, useEffect } from "react";
import axios from "axios";
import heroImg from "../assets/image 3.png";
import jazzyImg from "../assets/jazzyburgerHeroImg.svg";
import addIcon from "../assets/jazzyburgerAddToCartIcon.svg";
import foodgroup from "../assets/jazzyburgerFoodGroup.svg";
import naira from "../assets/jazzyburgerNairaIcon.png";
import likeIcon from "../assets/jazzyburgerLikeIcon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  let apiUrl = "https://jazzyburger-abimbola.onrender.com/burger/findAll";
  const getFetchedData = async () => {
    let fetchedUrl = await axios(apiUrl);
    setData(fetchedUrl.data);
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  return (
    <div className="mycontainer mt-4 mb-5">
      <div className="">
        <img className="w-100" src={heroImg} alt="" />
      </div>
      <div className="row mt-5 h-100 hero">
        <div className="col-lg-3 col-md-4 jazzy-img d-none d-md-block d-lg-block h-100">
          <img className="img-fluid" src={jazzyImg} alt="" />
        </div>
        <div className="col-lg-9 col-md-8 hero">
          <div className="card-container m-auto row">
            {data.map((datum) => {
              const { _id, title, price, image } = datum;
              return (
                <div
                  key={_id}
                  className="border cards p-0 w-100 col-md-6 col-sm-6"
                >
                  <Link to={`/SingleProduct/${_id}`}>
                    <div className="card-img">
                      <img
                        className="img-fluid w-100 burger-img"
                        src={image}
                        alt=""
                      />
                      <img className="like-icon" src={likeIcon} alt="" />
                    </div>
                  </Link>
                  <div className="card-body p-2 burger-body">
                    <p className="burger-title mb-2 mt-1 fw-bold text-uppercase">
                      {title}
                    </p>
                    <p className="burger-total mb-2">Total Price</p>
                    <p className="burger-price mb-2">
                      <img className="img-fluid" src={naira} alt="" />
                      <span>{price}.0</span>
                    </p>
                    <img className=" mb-1 img-fluid" src={foodgroup} alt="" />
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
