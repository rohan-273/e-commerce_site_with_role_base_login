import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products?.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top h-75 p-3"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
