import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCategories,
} from "../store/slices/productsSlice";
import { useState } from "react";

function DropdownBtn() {
  const [categoryTitle, setCategoryTitle] = useState("CATEGORIES");
  const categories = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    if (category === "all") {
      dispatch(fetchProducts());
      setCategoryTitle("CATEGORIES");
    } else {
      dispatch(fetchProductsByCategories(category));
      setCategoryTitle(category.toUpperCase());
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {categoryTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category, i) => (
          <Dropdown.Item key={i} onClick={() => handleFilter(category)}>
            {category.toUpperCase()}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBtn;
