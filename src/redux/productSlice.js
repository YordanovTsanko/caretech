import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import laptops from "../utils/laptops.json";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category, thunkAPI) => {
    try {
      if (category.nameEn === "Laptops") {
        return laptops.content;
      } else {
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
