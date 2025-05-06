import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import MonthlyCalendar from './MonthlyCalendar'; // Import the MonthlyCalendar component
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedDate,setTodayScheduleTap } from '../Redux/Reducers/CalendarReducer';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { weekDays } from '../../Dummy_Data/daysAndMonths';
import { formatDate } from '../Methods/formateDateMethod';
import { isToday } from '../Methods/isTodayMethod';

export default function WeeklyCalendar() {
  const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek(new Date()));
  const selectedDate =useSelector((state) => state.calendar.selectedDate);
  // console.log('ssssssssss', selectedDate)
  const dispatch = useDispatch();
  const [isMonthlyCalendarVisible, setMonthlyCalendarVisible] = useState(false); // State for modal visibility


  useEffect(() => {
    dispatch(setSelectedDate(new Date()));
    console.log("jhgf", selectedDate);
  }, [])


  //^ Get the start of the current week
  function getStartOfWeek(date) {
    const day = date.getDay(); // Get current day (0-6)
    const diff = date.getDate() - day; // Calculate the start of the week
    return new Date(date.setDate(diff));
  }

  //^ Generate an array of dates for the current week
  function getWeekDates(startDate) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  }

  const currentWeekDates = getWeekDates(currentWeekStart);

  //^ Navigate to the previous week
  const goToPreviousWeek = () => {
    const previousWeek = new Date(currentWeekStart);
    previousWeek.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(previousWeek);
  };

  //^ Navigate to the next week
  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeekStart);
    nextWeek.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeek);
  };


  //^ Handle date selection
  const handleDateSelect = (date) => {
    dispatch(setSelectedDate(date)); // Set the selected date
    dispatch(setTodayScheduleTap(isToday(date) ? 'Today Schedule' : formatDate(date))); // Update the tab title
  };
  

  //^ Open/Close the Monthly Calendar Modal
  const toggleMonthlyCalendar = () => {
    setMonthlyCalendarVisible(!isMonthlyCalendarVisible);
  };

  //^ Handle date selection from the monthly calendar
  const handleMonthDateSelect = (date) => {
    const startOfSelectedWeek = getStartOfWeek(new Date(date)); // Get the start of the selected week
    setCurrentWeekStart(startOfSelectedWeek); // Set the current week to the selected week's start
    dispatch(setSelectedDate(date)); // Set the selected date
    toggleMonthlyCalendar(); // Close the modal after selecting the date
  };

  return (
    <View style={styles.container}>
      {/* Header: Navigation and Month */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goToPreviousWeek}>
        <FontAwesome5 name="angle-left" size={20} color="#1F509A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMonthlyCalendar}>
          <Text style={styles.monthText}>
            {currentWeekDates[0].toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextWeek}>
        <FontAwesome5 name="angle-right" size={20} color="#1F509A" />
        </TouchableOpacity>
      </View>

      {/* Weekly Dates */}
      <View style={styles.weekContainer}>
        {currentWeekDates.map((date, index) => {
          const isSelected = selectedDate?.toDateString() === date.toDateString(); // Check if the date is selected
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleDateSelect(date)}
              style={[
                styles.dateBox,
                isSelected && styles.selectedDateBox, 
              ]}
            >
              <Text
                style={[
                  styles.weekDay,
                  isSelected && styles.selectedDayText, 
                ]}
              >
                {weekDays[index]}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  isSelected && styles.selectedDayText, // Apply selected styles to text
                ]}
              >
                {date.getDate()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Modal for Monthly Calendar */}
      <Modal
        visible={isMonthlyCalendarVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleMonthlyCalendar}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <MonthlyCalendar
              onDateSelect={handleMonthDateSelect}// Pass the handleMonthDateSelect function
            />
            <TouchableOpacity style={styles.closeButton} onPress={toggleMonthlyCalendar}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  navButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43576E',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F509A',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: "3%",
  },
  dateBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    width: 40, 
    height: 60,
  },
  weekDay: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
  dateText: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold',
    marginTop: 4,
  },
  selectedDateBox: {
    backgroundColor: '#D4EBF8', 
    paddingVertical: 10,
    width: 40,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayText: {
    color: '#1F509A',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor:"white",
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#1F509A',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
