import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../store/slices/productsSlice";
import { Col, Container, Row } from "react-bootstrap";
import { HiStar } from "react-icons/hi";

export default function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.products.obj);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);
  return (
    <Container className="product-details">
      <Row>
        <Col md={6}>
          <img
            src={product.thumbnail && product.images[1]}
            alt="product-img"
            className="img-fluid w-100"
          />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <h2 className="mb-3 mt-2">${product.price}</h2>
          <h5>
            {product.rating}
            <HiStar className="text-warning" />
          </h5>
          <h5 className="brand mt-4">Brand: {product.brand}</h5>
          <h5 className="my-4">{product.description}</h5>
          <h5 className="mb-5">Stock & Availability: {product.stock}</h5>
          <button className="my-btn w-100">Add to Cart</button>
        </Col>
      </Row>
    </Container>
  );
}
