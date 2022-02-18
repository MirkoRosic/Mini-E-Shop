import "./App.css";
import { react, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";

const url = "https://fakestoreapi.com/products";

function App() {
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((prod) => {
  //       setProducts(prod);
  //     });
  // };

  // useEffect(() => {
  //   getProducts();
  //   console.log(products);
  // }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/checkout" element={<Checkout />} />

        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
