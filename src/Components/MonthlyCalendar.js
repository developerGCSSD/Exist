import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTodayScheduleTap } from '../Redux/Reducers/CalendarReducer';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { weekDays,monthNames } from '../../Dummy_Data/daysAndMonths';
import { formatDate } from '../Methods/formateDateMethod';
import { isToday } from '../Methods/isTodayMethod';


// eslint-disable-next-line react/prop-types
export default function MonthlyCalendar({ onDateSelect }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  //^ Get days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  //^ Get the starting day of the week for the month
  const startDay = new Date(currentYear, currentMonth, 1).getDay();


  //* Handle date selection
  const handleDateSelect = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    onDateSelect && onDateSelect(newDate);

    const formattedDate = formatDate(newDate);
    if (isToday(newDate)) {
      dispatch(setTodayScheduleTap('Today Schedule')); // Keep it as "Today Schedule" if it's today
    } else {
      dispatch(setTodayScheduleTap(formattedDate)); // Change the "Today Schedule" tab title to the selected date
    }
  };

  //* Navigate to previous month
  const prevMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth - 1, 1));
  };

  //* Navigate to next month
  const nextMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth + 1, 1));
  };

  //* Generate calendar days
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Month Navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth}>
          <FontAwesome5 name="angle-left" size={20} color="#1F509A" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {monthNames[currentMonth]} {currentYear}
        </Text>
        <TouchableOpacity onPress={nextMonth}>
          <FontAwesome5 name="angle-right" size={20} color="#1F509A" />
        </TouchableOpacity>
      </View>

      {/* Week Days */}
      <View style={styles.weekRow}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* Calendar Days */}
      <View style={styles.daysContainer}>
        {/* Empty slots for days before the start of the month */}
        {Array.from({ length: startDay }).map((_, index) => (
          <View key={`empty-${index}`} style={styles.dayBox} />
        ))}
        {calendarDays.map((day) => (
          <TouchableOpacity
            key={day}
            onPress={() => handleDateSelect(day)}
            style={[
              styles.dayBox,
              selectedDate.getDate() === day &&
                currentMonth === selectedDate.getMonth() &&
                currentYear === selectedDate.getFullYear() && styles.selectedDay,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                selectedDate.getDate() === day &&
                  currentMonth === selectedDate.getMonth() &&
                  currentYear === selectedDate.getFullYear() && styles.selectedDayText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
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
    marginBottom: '5%',
  },
  navButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43576E',
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43576E',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    width: '14.2%',
    textAlign: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayBox: {
    width: '14.2%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 2,
  },
  dayText: {
    fontSize: 14,
    color: '#43576E',
  },
  selectedDay: {
    backgroundColor: '#D4EBF8',
  },
  selectedDayText: {
    color: '#1F509A',
    fontWeight: 'bold',
  },
});
