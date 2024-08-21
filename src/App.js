import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./auth/Login";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Item from "./components/Item";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Rental from "./components/Rental";
import Category from "./components/Category";
import PrivateRoute from "./routes/PrivateRoute";
import Topbar from "./components/Topbar";
import { LOGIN_SUCCESS } from "./redux/actions/authActions";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: LOGIN_SUCCESS, payload: JSON.parse(storedUser) });
    }
  }, [dispatch]);

  return (
    <Router>
      {user && <Topbar user={user} />}
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Login />} />
        <Route path="/product" element={<PrivateRoute element={Product} />} />
        <Route path="/item" element={<PrivateRoute element={Item} />} />
        <Route path="/cart" element={<PrivateRoute element={Cart} />} />
        <Route path="/contact" element={<PrivateRoute element={Contact} />} />
        <Route path="/rental" element={<PrivateRoute element={Rental} />} />
        <Route path="/category" element={<PrivateRoute element={Category} />} />
      </Routes>
    </Router>
  );
};

export default App;
