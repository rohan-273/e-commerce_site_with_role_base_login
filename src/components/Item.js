import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Item = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  useEffect(() => {
    // Fetch products
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) => product.category === selectedCategory
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleViewDetails = (id) => {
    navigate(`/item-details/${id}`);
  };

  return (
    <div>
      <div className="container">
        <h1>{selectedCategory}</h1>
        <div className="row">
          {products?.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div
                className="card h-100"
                style={{ cursor: "pointer" }}
                onClick={() => handleViewDetails(product.id)}
              >
                <img
                  src={product.image}
                  className="card-img-top h-75 p-3"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ height: 50 }}>
                    {product.title.length > 40
                      ? product.title.substring(0, 40) + "..."
                      : product.title}
                  </h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
