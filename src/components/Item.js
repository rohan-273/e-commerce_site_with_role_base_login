import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Item = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
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

  return (
    <div>
      <div className="container">
        <h1>{selectedCategory}</h1>
        <div className="row">
          {products?.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100" style={{ cursor: "pointer" }}>
                <img
                  src={product.image}
                  className="card-img-top h-75 p-3"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{height: 50}}>{product.title}</h5>
                  <div className="d-flex justify-content-between">
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <span>Rating: {product.rating.rate}</span>
                  </div>
                  {/* Add functionality for Add to Cart if needed */}
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
