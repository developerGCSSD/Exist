import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: new Date(),
  todayScheduleTap:"Today Schedule"
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setTodayScheduleTap :(state,action)=>{
        state.todayScheduleTap = action.payload
    }
  },
});

export const { setSelectedDate, setTodayScheduleTap } = calendarSlice.actions;
export default calendarSlice.reducer;
