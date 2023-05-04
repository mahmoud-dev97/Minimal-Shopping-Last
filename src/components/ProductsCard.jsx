import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import { Container, Row } from "react-bootstrap";
import DropdownBtn from "./DropdownBtn";
import Pagination from "./Pagination";

export default function ProductsCard() {
  const location = useLocation();
  const allProducts = useSelector((state) => state.products.arr);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container fluid className="px-5">
      <Row>
        {location.pathname !== "/" && currentPage === 1 && <DropdownBtn />}
        {allProducts.length === 0 ? (
          <Loading />
        ) : (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
        {location.pathname !== "/" && allProducts.length === 30 && (
          <Pagination paginateNum={paginate} />
        )}
      </Row>
    </Container>
  );
}
