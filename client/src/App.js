import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import TestPage from "./TestPage";
import Profile from "./pages/Profile/Profile";
import Payment from "./pages/Payment/Payment";
import WishList from "./pages/WishList/WishList";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProducts from "./pages/AddProducts/AddProducts";
import OrdersPage from "./pages/Dashboard/Orders/OrdersPage";
import ProductsPage from "./pages/Dashboard/SellerProducts/ProductsPage";
import SellerHome from "./pages/SellerHome/SellerHome";
import SellerSignIn from "./pages/SellerSignIn/SellerSignIn";
import SellerSignUp from "./pages/SellerSignUp/SellerSignUp";
import Users from "./pages/Dashboard/Users/Users";

function App() {
  // let alreadyLoggedIn = localStorage.getItem("isLoggedIn");
  const [browserToken, setBrowserToken] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/verifyToken", {
        withCredentials: true,
      })
      .then((response) => {
        setBrowserToken(response.data.result);
      })
      .catch((response) => {
        setBrowserToken(response.result);
      });
  }, []);

  return (
    <Provider store={store}>
      {/* element={browserToken ? <Home /> : <SignUp />}  */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/signin/home" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route
            path="/payment"
            element={browserToken ? <Payment /> : <SignIn />}
          /> */}

          <Route path="/testing" element={<Product />} />

          {/* {seller routes starts}  */}
          <Route path="/seller">
            <Route path="signin" element={<SellerSignIn />} />
            <Route path="signup" element={<SellerSignUp />} />
            <Route path="home" element={<SellerHome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="users" element={<Users />} />
          </Route>
          {/* {seller routes starts}  */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export const ProtectedRoute = ({ children }) => {
  let alreadyLoggedIn = localStorage.getItem("isLoggedIn");
  if (alreadyLoggedIn) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default App;
