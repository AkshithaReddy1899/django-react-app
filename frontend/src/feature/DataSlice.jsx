import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
export const fetchCategories = createAsyncThunk('E-COMMERCE/FETCH_CATEGORIES', async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  return response.data;
});

export const searchProducts = createAsyncThunk('E-COMMERCE/SEARCH_PRODUCTS', async (search) => {
  const response = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
  return sortData(response.data.products);
});

export const searchCategories = createAsyncThunk('E-COMMERCE/PRODUCTS_BY_CATEGORY', async (value) => {
  const response = await axios.get(`https://dummyjson.com/products/category/${value}`);
  return(sortData(response.data.products));
});
*/

export const fetchList = createAsyncThunk('FETCH_LIST', async (value) => {
	const response = await axios.get('http://localhost:8000/api/data')
	return response.data;
})

export const DataSlice = createSlice({
  name: 'list',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchList.fulfilled, (state, action) => {
			state.data = action.payload;
		})
  },
});

export default DataSlice.reducer;
