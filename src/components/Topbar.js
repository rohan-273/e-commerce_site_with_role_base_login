import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Link } from "react-router-dom";

const Topbar = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Dashboard
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </li>
          {user.role === "seller" && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
