import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/item?category=${category}`);
  };
  return (
    <div className="m-5 d-flex">
      <div
        className="card m-3"
        style={{ width: "19rem", cursor: "pointer" }}
        onClick={() => handleCategoryClick("men's clothing")}
      >
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          className="card-img-top h-75 p-3"
          alt="men's wear"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Men's Wear</h5>
        </div>
      </div>
      <div
        className="card m-3"
        style={{ width: "19rem", cursor: "pointer" }}
        onClick={() => handleCategoryClick("jewelery")}
      >
        <img
          src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
          className="card-img-top h-75 p-3"
          alt="Jewellery"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Jewellery</h5>
        </div>
      </div>
      <div
        className="card m-3"
        style={{ width: "19rem", cursor: "pointer" }}
        onClick={() => handleCategoryClick("electronics")}
      >
        <img
          src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
          className="card-img-top h-75 p-3"
          alt="Electronics"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Electronics</h5>
        </div>
      </div>
      <div
        className="card m-3"
        style={{ width: "19rem", cursor: "pointer" }}
        onClick={() => handleCategoryClick("women's clothing")}
      >
        <img
          src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
          className="card-img-top h-75 p-3"
          alt="Women's Wear"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Women's Wear</h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
