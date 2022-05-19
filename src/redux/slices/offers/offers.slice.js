import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../../lib/axios';

export const getOffers = createAsyncThunk('offers/get', async () => {
  const { data } = await client.get('/postings/leverdemo', {
    params: {
      mode: 'json',
      group: 'team',
    },
  });
  return data;
});

const offers = createSlice({
  name: 'offers',
  initialState: { value: [], team: '', availableTeams: [] },
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOffers.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getOffers.fulfilled, (state, action) => {
      state.value = action.payload;
      state.availableTeams = action.payload.map((offer) => offer.title);
      state.status = 'fullfilled';
    });
    builder.addCase(getOffers.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    });
  },
});

export const { setTeam } = offers.actions;
export default offers.reducer;
