import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);

  return user ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
