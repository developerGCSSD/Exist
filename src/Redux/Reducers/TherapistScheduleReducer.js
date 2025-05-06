/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../../Network/endPoints";
import { api } from "../../Network/api";
import { TherapistShedule } from "../../Models/therapistSchedule";

export const TherapistScheduleThunk = createAsyncThunk(
  endPoints.ScheduleOfSpecificTherapist,
  async ({ profileId, day }) => {  // Accepting both profileId and day
    // console.log("Requesting therapist schedule with profileId:", profileId, "and day:", day); 

    const response = await api.get(endPoints.ScheduleOfSpecificTherapist, {
        params: { 
            therapistId: profileId, // Passing therapistId
            day: day // Passing day
        },
      }).catch(error => {        
        console.log(error.toString());
        return error;
    });

    if (response.status !== 200) {
        throw new Error('Something Went Wrong');
    } else {      
        return response.data;
    }
  }
);

export const initialState = {
    therapistSchedule :[],
}

export const therapistScheduleSlice = createSlice({
    name:"therapistSchedule",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(TherapistScheduleThunk.fulfilled, (state, action) => {
          state.therapistSchedule = action.payload; 
          state.isLoading = false;
          // console.log('looooooad1',state.isLoading)
        });
        builder.addCase(TherapistScheduleThunk.pending, (state) => {
          state.isLoading = true;
          // console.log('looooooad2',state.isLoading)
        });
        builder.addCase(TherapistScheduleThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
          // console.log('looooooad3',state.isLoading)
        });
      },
})

export default therapistScheduleSlice.reducer