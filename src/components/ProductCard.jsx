import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromFavorites,
  addToFavorites,
} from "../store/slices/productsSlice";
import { successToast } from "./AlertTimer";
import { ToastContainer } from "react-toastify";

export default function ProductCard({ product }) {
  const [heart, setHeart] = useState("heart");
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (products.favArr.some((fav) => fav.id === product.id)) {
      setHeart("heart");
      dispatch(removeFromFavorites(product));
    } else {
      setHeart("heart-red");
      dispatch(addToFavorites(product));
      successToast("Product added successfully");
    }
  };

  useEffect(() => {
    const favProducts = JSON.parse(localStorage.getItem("favProducts")) || [];
    const isFavorite = favProducts.some((fav) => fav.id === product.id);
    setHeart(isFavorite ? "heart-red" : "heart");
  }, [product.id]);

  return (
      <Col lg={3} md={4} sm={6} className="p-3">
        <Card>
          <Link to={`/products/${product.id}`}>
            <Card.Img variant="top" src={product.thumbnail} />
          </Link>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <span>{product.title}</span>
              <span>{product.price}$</span>
            </Card.Title>
            <Card.Text>{product.description.substring(0, 47)}...</Card.Text>
          </Card.Body>
          <div className="parent" onClick={handleClick}>
            <IoMdHeartEmpty className={heart} />
          </div>
        </Card>
        <ToastContainer />
      </Col>
  );
}
