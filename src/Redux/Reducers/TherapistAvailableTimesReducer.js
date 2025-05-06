import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../../Network/endPoints";
import { api } from "../../Network/api";

export const TherapistAvailableTimes = createAsyncThunk(
  endPoints.TherapistAvailableTimes,
  async ({ profileId, date }) => {
    try {
      const response = await api.get(endPoints.TherapistAvailableTimes, {
        params: { therapistId: profileId, specificDate: date },
      });

      if (response.status !== 200) {
        throw new Error("Something went wrong2");
      }
      return response.data; // Store full response
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  }
);

export const initialState = {
  availableTimes: [], 
  isLoading: false,
  error: null,
};

export const availableTimesSlice = createSlice({
  name: "availableTimes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(TherapistAvailableTimes.pending, (state) => {
      state.isLoading = true;
      console.log("eeerrrrr1")

    });
    builder.addCase(TherapistAvailableTimes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.availableTimes = action.payload // Store full response
      console.log("acccccc", state.availableTimes);
    });
    builder.addCase(TherapistAvailableTimes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log("eeerrrrr2")
    });
  },
});

export default availableTimesSlice.reducer;
