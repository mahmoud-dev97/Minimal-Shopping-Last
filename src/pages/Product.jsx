import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFavorites, fetchProduct } from "../store/slices/productsSlice";
import { Col, Container, Row } from "react-bootstrap";
import { HiStar } from "react-icons/hi";
import AutoCloseAlert from "../components/AutoCloseAlert";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product() {
  const { id } = useParams();
  const [disableButton, setDisableButton] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.obj);
  const favoriteProducts = useSelector((state) => state.products.favArr);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleClick = () => {
    if (favoriteProducts.some((fav) => fav.id === product.id)) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
      dispatch(addToFavorites(product));
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Container className="product-details">
      <Row>
        <Col md={6} className="my-5">
          {product?.images && (
            <Slider {...settings}>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`product-img-${index}`}
                    className="img-fluid w-100"
                  />
                </div>
              ))}
            </Slider>
          )}
        </Col>
        <Col md={6}>
          <h2>{product?.title}</h2>
          <h2 className="mb-3 mt-2">${product?.price}</h2>
          <h5>
            {product?.rating}
            <HiStar className="text-warning" />
          </h5>
          <h5 className="brand mt-4">Brand: {product?.brand}</h5>
          <h5 className="my-4">{product?.description}</h5>
          <h5 className="mb-5">Stock & Availability: {product?.stock}</h5>
          <button
            disabled={disableButton}
            onClick={handleClick}
            className="my-btn w-100"
          >
            Add to Cart
          </button>
          {disableButton && (
            <AutoCloseAlert
              variant="success"
              message="Added to Cart Successful"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
