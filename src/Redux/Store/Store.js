// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../Reducers/CalendarReducer";
import userReducer from "../Reducers/AuthReducer";
import therapistScheduleReducer from "../Reducers/TherapistScheduleReducer";
import TherapistAvailableTimesReducer from "../Reducers/TherapistAvailableTimesReducer";
const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    user: userReducer,
    therapistSchedule: therapistScheduleReducer,
    availableTimes: TherapistAvailableTimesReducer,
  },
});

export default store;
