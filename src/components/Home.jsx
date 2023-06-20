import { useState, useEffect } from "react";
import axios from "axios";
import heroImg from "../assets/image 3.png";
import jazzyImg from "../assets/jazzyburgerHeroImg.svg";
import addIcon from "../assets/jazzyburgerAddToCartIcon.svg";
import foodgroup from "../assets/jazzyburgerFoodGroup.svg";
import naira from "../assets/jazzyburgerNairaIcon.png";
import likeIcon from "../assets/jazzyburgerLikeIcon.svg";

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
    <div className="container mt-4 mb-5">
      <div className="hero">
        <img className="w-100" src={heroImg} alt="" />
      </div>
      <div className="row justify-content-between mt-5">
        <div className="col-lg-4 jazzy-img d-none d-lg-block">
          <img className="w-100" src={jazzyImg} alt="" />
        </div>
        <div className="col-lg-8">
          <div className="card-container">
            {data.map((datum) => {
              const { _id, title, price, image } = datum;
              return (
                <div key={_id} className="border cards">
                  <div className="card-img">
                    <img className="w-100" src={image} alt="" />
                    <img className="like-icon" src={likeIcon} alt="" />
                  </div>
                  <div className="card-body p-2">
                    <p className="burger-title mt-1">{title}</p>
                    <p className="burger-total">Total Price</p>
                    <p className="burger-price">
                      <img src={naira} alt="" />
                      <span>{price}.0</span>
                    </p>
                    <img className="mt-4 mb-3" src={foodgroup} alt="" />
                    <button className="cart-btn d-flex justify-content-center align-items-center gap-4 mb-3">
                      <img className="" src={addIcon} alt="" />
                      <span>Add To Cart</span>
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
