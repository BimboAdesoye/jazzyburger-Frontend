import support from "../assets/jazzyburger247Icon.svg";
import payment from "../assets/jazzyburgerPaymentIcon.svg";
import copyright from "../assets/jazzyburgerCopyrightSymbol.svg";
import facebook from "../assets/jazzyburgerFacebookIcon.svg";
import twitter from "../assets/jazzyburgerTwitterIcon.svg";
import instagram from "../assets/jazzyburgerInstagramIcon.svg";
import youtube from "../assets/jazzyburgerYoutubeIcon.svg";
import googleplay from "../assets/jazzyburgerGooglePlay.png";
import appstore from "../assets/jazzyburgerAppStore.svg";
import dot from "../assets/jazzyburgerdot.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-black">
        <div className="container py-5">
          <div className="top d-flex justify-content-between">
            <div className="payment-support d-flex gap-5">
              <div className="d-flex align-items-center gap-2 text-center">
                <img src={support} alt="" />
                <span className="text-white support">
                  <p className="mb-0">24/7</p>
                  <p>Support</p>
                </span>
              </div>
              <div className="d-flex align-items-center gap-2 text-center">
                <img src={payment} alt="" />
                <span className="text-white payment">
                  <p className="mb-0">100%</p>
                  <p>Payment Secured</p>
                </span>
              </div>
            </div>
            <div className="getApp d-flex gap-3">
              <img src={appstore} alt="" />
              <img src={googleplay} alt="" />
            </div>
          </div>
          <div className="middle text-white my-5 d-flex flex-column gap-2">
            <h2 className="help">Need Help</h2>
            <p className="number">
              <span className="text-decoration-underline">
                +234 907 466 6655
              </span>
              <span className="mx-3">or</span>
            </p>
            <p className="text-decoration-underline number">help@jazzysburger.com</p>
          </div>
          <div className="bottom text-white">
            <h1 className="follow-us">FOLLOW US</h1>
            <div className="socials d-flex gap-3 my-4">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center p-2">
        <p className="mb-0">
          <img src={copyright} alt="" />
          JJB Concepts <img src={dot} alt="" /> Developed by our Digital LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
