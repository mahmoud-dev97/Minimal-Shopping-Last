import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCategories,
} from "../store/slices/productsSlice";
import { useState } from "react";
function DropdownBtn() {
  const [catTitle, setCatTitle] = useState("CATEGORIES");
  const catArr = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  const dispatch = useDispatch();

  const handelFilter = (catItem) => {
    if (catItem === "all") {
      dispatch(fetchProducts());
      setCatTitle("CATEGORIES");
    } else {
      dispatch(fetchProductsByCategories(catItem));
      setCatTitle(catItem.toUpperCase());
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {catTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {catArr.map((catItem, i) => (
          <Dropdown.Item key={i} onClick={() => handelFilter(catItem)}>
            {catItem.toUpperCase()}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBtn;
