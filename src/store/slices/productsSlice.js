import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialFavArr = JSON.parse(localStorage.getItem("favProducts")) || [];

const initialState = {
  arr: [],
  obj: {},
  favArr: initialFavArr,
};
// fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products);
    return res.data.products;
  }
);
// fetch products by categories
export const fetchProductsByCategories = createAsyncThunk(
  "products/fetchProductsByCategories",
  async (cat) => {
    const res = await axios.get(
      `https://dummyjson.com/products/category/${cat}`
    );
    console.log(res.data.products);
    return res.data.products;
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favArr.push(action.payload);
      localStorage.setItem("favProducts", JSON.stringify(state.favArr));
    },
    removeFromFavorites: (state, action) => {
      state.favArr = state.favArr.filter((e) => e.id !== action.payload.id);
      localStorage.setItem("favProducts", JSON.stringify(state.favArr));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.arr = action.payload;
    });
    builder.addCase(fetchProductsByCategories.fulfilled, (state, action) => {
      state.arr = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.obj = action.payload;
    });
  },
});

export const { addToFavorites, removeFromFavorites } = productsSlice.actions;

export default productsSlice.reducer;
