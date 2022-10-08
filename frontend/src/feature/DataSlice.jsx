import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
