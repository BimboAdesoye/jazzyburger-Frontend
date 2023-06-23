import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./components/Home";
// import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/Cart" element={<Cart />} /> */}
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
