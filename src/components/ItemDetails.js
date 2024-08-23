import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import ReactStarsRating from "react-awesome-stars-rating";

const ItemDetails = () => {
  // Get the product ID from URL
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // rating
  const onChangeRating = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid h-75"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <h3 className="text-muted">${product.price.toFixed(2)}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            <ReactStarsRating
              onChange={onChangeRating}
              value={product.rating.rate}
            />            
          </p>
          <div className="mt-4">
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
