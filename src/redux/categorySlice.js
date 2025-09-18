import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categories from "../utils/categories.json"

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      return categories; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
