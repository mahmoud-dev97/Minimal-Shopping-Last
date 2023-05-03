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
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const allProducts = useSelector((state) => state.products.arr);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  // Get current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); // -> pagenum = 1 || 2 || 3
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
        {location.pathname !== "/" && currentPage === 1 && <DropdownBtn />}
        {products.length < 1 ? (
          <Loading />
        ) : (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
        {location.pathname !== "/" && products.length === 30 && (
          <Pagination paginateNum={paginate} />
        )}
      </Row>
    </Container>
  );
}
