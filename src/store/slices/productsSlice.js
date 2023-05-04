import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialFavArr = JSON.parse(localStorage.getItem("favProducts")) || [];

const initialState = {
  arr: [],
  obj: {},
  favArr: initialFavArr,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  }
);

export const fetchProductsByCategories = createAsyncThunk(
  "products/fetchProductsByCategories",
  async (cat) => {
    const res = await axios.get(
      `https://dummyjson.com/products/category/${cat}`
    );
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
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.arr = action.payload;
      })
      .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
        state.arr = action.payload;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.obj = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = productsSlice.actions;

export default productsSlice.reducer;
