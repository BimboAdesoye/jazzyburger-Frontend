import "../styles/CheckOut.css";
import deleteIcon from "../assets/jazzyBurgerDeleteIcon.svg";
import increaseicon from "../assets/jazzyburgerIncreaseIcon.svg";
import deleteicon from "../assets/jazzyburgerDecreaseIcon.svg";

const CheckOut = () => {
  return (
    <div className="accent-container checkout my-3">
      <div className="place-order shadow-sm">
        <header className="checkout-header">
          <h3 className="checkout-heading fs-10 fw-bold mb-5">
            Review and place order
          </h3>
          <h6 className="checkout-text">
            Review / Add address and fulfill payments to complete your purchase
          </h6>
        </header>
        <section className="checkout-info">
          <h6 className="fw-bold">Recipient information</h6>
          <button className="p-2 px-5">Add Recipient</button>
        </section>
        <section className="delivery-address">
          <p>Delivery Address</p>
          <button className="p-2 px-5">Add Delivery Address</button>
        </section>
        <div className="order-btn mt-4 w-100">
          <button className="place-order-btn p-2">Place Your Order</button>
        </div>
      </div>
      <div className="checkout-cart shadow-sm">
        <h6 className="checkout-cart-heading p-3">Your order from</h6>
        <div className="checkout-cart-body">
          <div className="order px-3 pt-2 pb-3 d-flex flex-column gap-1">
            <div className="d-flex justify-content-between align-items-center">
              <p className="order-title mb-0">Double Grilled Chicken Burger</p>
              <img src={deleteIcon} alt="" />
              <p className="mb-0 price">12000.0</p>
            </div>
            <button className="">
              <img src={deleteicon} alt="" />
              <p className="text-black mb-0 number">1</p>
              <img src={increaseicon} alt="" />
            </button>
          </div>
          <div className="Items px-3 pt-3">
            <div className="d-flex justify-content-between">
              <p>Items Total:</p>
              <p>12000.0</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Discount:</p>
              <p>0</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delivery Charge:</p>
              <p>0.0</p>
            </div>
          </div>
          <div className="Total d-flex justify-content-between p-3">
            <p>Total:</p>
            <p>12000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
