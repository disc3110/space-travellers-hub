/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchAllRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const usefullData = response.data.map((rocketdata) => ({
    id: rocketdata.rocket_id,
    name: rocketdata.rocket_name,
    images: rocketdata.flickr_images,
    description: rocketdata.description,
  }));
  return usefullData;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
  },
});
export default rocketsSlice.reducer;
