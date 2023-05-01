import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import { Container, Row } from "react-bootstrap";
import DropdownBtn from "./DropdownBtn";

export default function ProductsCard() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const allProducts = useSelector((state) => state.products.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    if (location.pathname === "/") {
      setProducts(allProducts.slice(0, 8));
    } else {
      setProducts(allProducts);
    }
  }, [allProducts, location.pathname]);
  return (
    <Container fluid className="px-5">
      <Row>
        {location.pathname !== "/" && products.length > 1 && <DropdownBtn />}
        {products.length < 1 ? (
          <Loading />
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Row>
    </Container>
  );
}
