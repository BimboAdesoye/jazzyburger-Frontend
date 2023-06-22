import UseFetch from "../Hooks/UseFetch";
import { useParams } from "react-router-dom";
import "../styles/SingleProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LikeIcon from "../assets/jazzyburgerLikeIcon.svg";
import Naira from "../assets/jazzyburgerNairaIcon.png";
import addIcon from "../assets/jazzyburgerAddToCartIcon.svg";
import increasebtn from "../assets/jazzyburgerIncreaseIcon.svg";
import decreasebtn from "../assets/jazzyburgerDecreaseIcon.svg";
import expandicon from "../assets/expand_less_FILL0_wght400_GRAD0_opsz48.svg";
import foodgroup from "../assets/jazzyburgerFoodGroup.svg";
import { useState } from "react";

const SingleProducts = () => {
  const { id } = useParams();
  const { data } = UseFetch(
    `https://jazzyburger-abimbola.onrender.com/burger/single/${id}`
  );
  const { data2 } = UseFetch(
    `https://jazzyburger-abimbola.onrender.com/burger/Burger`
  );
  const { image, title, description, price } = data;

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const dynamicClass = "collapsible";

  return (
    <div>
      <div className="mycontainer my-5 d-lg-flex d-md-flex gap-3 border shadow-sm rounded p-2">
        <div className="">
          <img className="singleImage" src={image} alt="" />
        </div>
        <div className="d-flex flex-column gap-2 p-2">
          <h1 className="fw-bold">{title}</h1>
          <p className="singleproductdesc">{description}</p>
          <div className="d-flex flex-wrap gap-4 align-items-center">
            <div className="d-flex gap-5 align-items-center">
              <span>
                <FontAwesomeIcon className="starIcon" icon={"star"} />
                <FontAwesomeIcon className="starIcon" icon={"star"} />
                <FontAwesomeIcon className="starIcon" icon={"star"} />
                <FontAwesomeIcon className="starIcon" icon={"star"} />
                <FontAwesomeIcon className="starIcon" icon={"star"} />
              </span>
              <p className="mb-0 review">0 Reviews</p>
            </div>
            <img className="likeicon" src={LikeIcon} alt="" />
            <span className="price">
              <img className="nairaicon" src={Naira} alt="" />
              {price}.0
            </span>
          </div>
          <div className="cart-component-btns">
            <button className=" d-flex justify-content-between add-btn p-2">
              <img src={decreasebtn} alt="" />
              <span>1</span>
              <img src={increasebtn} alt="" />
            </button>
            <button className="cart-btn d-flex justify-content-center align-items-center">
              <img className="" src={addIcon} alt="" />
              <span className="cart-btn-font">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mycontainer d-lg-flex gap-4 related-products">
        <div
          className={`${dynamicClass} ${
            collapse ? "collapsible--expanded" : null
          }`}
        >
          <header onClick={handleCollapse} className="collapsible-header mb-2">
            <h3 className="collapsible-heading">Related Products</h3>
            <img className="expand-icon" src={expandicon} alt="" />
          </header>
          {data2.map((datum) => {
            return (
              <div
                key={datum._id}
                className="border d-flex collapsible-content mb-3 rounded shadow-sm"
              >
                <div className="p-2">
                  <div className="d-flex flex-wrap gap-3 mb-2">
                    <h6 className="fw-bold">{datum.title}</h6>
                    <span className="d-flex gap-2 tags">
                      <button className="bg-black text-white">
                        {datum.category}
                      </button>
                      <button className="bg-gradient-red text-white">
                        Beef
                      </button>
                    </span>
                  </div>
                  <p className="two text-light-white">{datum.description}</p>
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <img src={foodgroup} alt="" />
                    <span className="price fw-bold">
                      <img className="nairaicon" src={Naira} alt="" />
                      {price}.0
                    </span>
                  </div>
                </div>
                <img className="category-img" src={datum.image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="placeholder-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum ea
          odio similique explicabo voluptas quo cupiditate delectus vel? Nulla?
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
