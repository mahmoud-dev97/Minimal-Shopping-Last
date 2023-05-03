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

  // Get current Books
  const indexOfLastProduct = currentPage * productsPerPage; // 1 * 8 = 8 / 2 * 8 = 16 / 3 * 8 = 24
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 8 - 8 = 0 / 16 - 8 = 8 / 24 - 8 = 16
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); // 0 -> 8 (index 0 to index 7 === 8 books) / 8 -> 16 / 16 -> 24

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
