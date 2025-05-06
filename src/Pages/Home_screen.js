/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import WeeklyCalendar from "../Components/WeeklyCalendar";
import HomeTab from "../Components/HomeTabs";
import SessionCard from "../Components/SessionCard";
import Spacer from "../Components/Spacer";
import { useDispatch, useSelector } from "react-redux";
import { setTodayScheduleTap } from "../Redux/Reducers/CalendarReducer";
import { formatDate } from "../Methods/formateDateMethod";
import { isToday } from "../Methods/isTodayMethod";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";
import { TherapistScheduleThunk } from "../Redux/Reducers/TherapistScheduleReducer";
import { retrieveToken } from "../AsyncStorage/LoginAuth";
import { TherapistAvailableTimes } from "../Redux/Reducers/TherapistAvailableTimesReducer";

export default function HomeScreen() {
  const navigation = useNavigation();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const [day, setDay] = useState(
    selectedDate.toLocaleDateString("en-US", { weekday: "long" })
  );
  // const [date, setDate] = useState(selectedDate.toLocaleDateString());
  const [date, setDate] = useState(
    selectedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );

  console.log("dateeeeeeeeee", date);
  const [profileId, setProfileId] = useState(null);
  console.log("iiid", profileId);
  const therapistSchedule = useSelector(
    (state) => state.therapistSchedule?.therapistSchedule
  );
  const therapistAvailable = useSelector(
    // (state) => state.availableTimes?.availableTimes?.availableTime || []
    (state) => state.availableTimes?.availableTimes["availableTime"] ?? []
  );

  console.log("Available Times", therapistAvailable);

  const todayScheduleTab = useSelector(
    (state) => state.calendar.todayScheduleTap
  );

  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("Today Schedule");
  const [loading, setLoading] = useState(false); // Loading state for today schedule
  const isLoading = useSelector((state) => state.therapistSchedule.isLoading);

  //& Effect to trigger loading when "Today Schedule" tab's title changes
  useEffect(() => {
    if (selectedTab === "Today Schedule") {
      // Trigger loading when the tab changes
      setLoading(true);

      // Simulate a loading process (like an API call or data processing)
      setTimeout(() => {
        dispatch(
          setTodayScheduleTap(
            isToday(selectedDate) ? "Today Schedule" : formatDate(selectedDate)
          )
        );
        setLoading(false); // Once data is "loaded", hide the loader
      }, 500); // Simulated delay (replace with actual data fetching logic if needed)
    }
  }, [todayScheduleTab, selectedTab, dispatch, selectedDate]); // Run effect when todayScheduleTab or selectedTab changes

  useEffect(() => {
    const getProfileIdFromStorage = async () => {
      try {
        const storedData = await retrieveToken();
        if (storedData?.profileId) {
          setProfileId(storedData.profileId);
        } else {
          console.error("Profile ID not found in AsyncStorage");
        }
      } catch (error) {
        console.error("Error retrieving profile ID:", error);
      }
    };
    getProfileIdFromStorage();
  }, []);

  useEffect(() => {
    if (profileId && day) {
      console.log("Calling API with:", { profileId, day });
      dispatch(TherapistScheduleThunk({ profileId, day }));
    } else {
      console.log("Skipping API call: profileId or day is missing");
    }
  }, [profileId, day, dispatch]);

  useEffect(() => {
    console.log("DAdada", date);
    console.log("DAdad2a", profileId);
    if (profileId && date) {
      console.log("Fetching available times for:", profileId, "on", date);
      dispatch(TherapistAvailableTimes({ profileId, date }));
    }
  }, [profileId, date, dispatch]);

  useEffect(() => {
    if (selectedDate && profileId) {
      const formattedDay = selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
      });
      console.log("Fetching schedule for:", profileId, "on", formattedDay);
      dispatch(TherapistScheduleThunk({ profileId, day: formattedDay }));
    }
  }, [selectedDate, profileId, dispatch]);

  useEffect(() => {
    setDate(
      selectedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }, [selectedDate]);

  // Handle tab press and loading logic
  const handleTabPress = (tabTitle) => {
    setSelectedTab(tabTitle);

    // Trigger loading when switching to 'Today Schedule'
    if (tabTitle === "Today Schedule") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const getTimeOnly = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // This enables 12-hour format with AM/PM
    });
  };

  const convertToMinutes = (time) => {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  // Function to check if time ranges overlap
  const isTimeSlotAvailable = (availableSlot, bookedSessions) => {
    const availableStart = convertToMinutes(availableSlot.from);
    const availableEnd = convertToMinutes(availableSlot.to);

    return !bookedSessions.some((session) => {
      const sessionStart = convertToMinutes(getTimeOnly(session.from));
      const sessionEnd = convertToMinutes(getTimeOnly(session.to));
      return availableStart >= sessionStart && availableStart < sessionEnd; // Overlapping condition
    });
  };

  return (
    <>
      <Header
        title="Home"
        rightIcon={"notifications-none"}
        leftIcon={"settings"}
        onLeftPress={() => {
          navigation.navigate("Settings");
        }}
      ></Header>
      <View style={styles.container}>
        {/* Weekly Calendar */}

        <WeeklyCalendar />

        {/* Spacer for space between calendar and tabs */}
        <Spacer height={"3%"} />

        {/* Tabs Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {/* "Today Schedule" Tab */}
          <HomeTab
            title={
              todayScheduleTab
                ? typeof todayScheduleTab === "string"
                  ? todayScheduleTab
                  : todayScheduleTab.toLocaleDateString() // Convert Date to string
                : "Today Schedule"
            }
            iconName="event"
            isSelected={selectedTab === "Today Schedule"}
            onPress={() => handleTabPress("Today Schedule")}
          />

          {/* Other Tabs */}
          {["My Requests", "Monthly Schedule", "New Clients"].map(
            (tabTitle, index) => (
              <HomeTab
                key={index}
                title={tabTitle}
                iconName={
                  tabTitle === "My Requests"
                    ? "my-library-books"
                    : tabTitle === "Monthly Schedule"
                    ? "calendar-today"
                    : "add-box"
                }
                isSelected={selectedTab === tabTitle}
                onPress={() => handleTabPress(tabTitle)} // Handle other tab selections
              />
            )
          )}
        </ScrollView>

        {/* Spacer for space between tabs and session cards */}
        {selectedTab === "Today Schedule" &&
          !isLoading &&
          therapistSchedule?.length &&
          therapistSchedule.some((schedule) => schedule.clients.length > 0) && (
            <View style={styles.statusContainer}>
              <View style={styles.statusItem}>
                <View
                  style={[styles.statusDot, { backgroundColor: "#118B50" }]}
                />
                <Text style={styles.statusText}>Available Time</Text>
              </View>
              <View style={styles.statusItem}>
                <View
                  style={[styles.statusDot, { backgroundColor: "#B82132" }]}
                />
                <Text style={styles.statusText}>Face To Face</Text>
              </View>
              <View style={styles.statusItem}>
                <View
                  style={[styles.statusDot, { backgroundColor: "#3674B5" }]}
                />
                <Text style={styles.statusText}>Online</Text>
              </View>
            </View>
          )}
        <Spacer height={"2%"} />

        {/* Conditionally render Session Cards or Loader */}
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#3674B5" />
          </View>
        ) : selectedTab === "Today Schedule" || selectedTab.includes("/") ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.sessionsContainer}
          >
            {/* Render Scheduled Sessions */}
            {therapistSchedule?.length &&
            therapistSchedule.some(
              (schedule) => schedule.clients.length > 0
            ) ? (
              therapistSchedule
                .flatMap((schedule) =>
                  schedule.clients.flatMap((client) =>
                    client.clientDayDates
                      .filter((session) => {
                        if (!session.date) return false;
                        const sessionDate = new Date(session.date)
                          .toISOString()
                          .split("T")[0];
                        const formattedSelectedDate = selectedDate
                          .toISOString()
                          .split("T")[0];
                        return sessionDate === formattedSelectedDate;
                      })
                      .map((session) => ({
                        ...session,
                        clientName: client.name || "Unknown",
                        sessionType: client.sessionType || "Unknown",
                        sessionMethod: session.method || "Unknown",
                        issue: client.currentIssue,
                        clientId: client.id,
                      }))
                  )
                )
                .sort((a, b) => new Date(a.from) - new Date(b.from)) // Sorting sessions by start time
                .map((session, index) => (
                  <SessionCard
                    key={`session-${index}`}
                    clientName={session.clientName}
                    sessionStartTime={getTimeOnly(session.from) || "N/A"}
                    sessionEndTime={getTimeOnly(session.to) || "N/A"}
                    sessionType={session.sessionType}
                    sessionMethod={session.sessionMethod}
                    isTimerActive={true}
                    onTimerFinish={() => {}}
                    onPress={() => {
                      navigation.navigate("SessionDetails", {
                        clientName: session.clientName,
                        sessionStartTime: getTimeOnly(session.from),
                        sessionEndTime: getTimeOnly(session.to),
                        sessionType: session.sessionType,
                        sessionMethod: session.sessionMethod,
                        issue: session.issue,
                        id: session.clientId,
                      });
                    }}
                  />
                ))
            ) : (
              <View style={styles.noContentContainer}>
                <Text style={styles.noContentContainerText}>
                  No sessions available
                </Text>
              </View>
            )}

            {/* Render Available Times (Filtered) */}
            {therapistAvailable?.length > 0 &&
              therapistAvailable
                .filter((slot) =>
                  isTimeSlotAvailable(
                    slot,
                    therapistSchedule.flatMap((schedule) =>
                      schedule.clients.flatMap(
                        (client) => client.clientDayDates
                      )
                    )
                  )
                )
                .sort(
                  (a, b) => convertToMinutes(a.from) - convertToMinutes(b.from)
                )
                .map((slot, index) => (
                  <SessionCard
                    key={`available-${index}`}
                    clientName="Available Time"
                    sessionStartTime={slot.from}
                    sessionEndTime={slot.to}
                    sessionType={"Available"}
                    sessionMethod={"available"}
                    isTimerActive={false}
                    onPress={() => {}}
                  />
                ))}
          </ScrollView>
        ) : (
          <View style={styles.noContentContainer}>
            <Text style={styles.noContentContainerText}>No Content</Text>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: "5%",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingRight: "13%",
    marginBottom: "2%",
  },
  sessionsContainer: {
    paddingHorizontal: "1.5%",
    height: "65%",
  },
  noContentContainer: {
    flex: 1,
    display: "flex",
  },
  noContentContainerText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#A5BFCC",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "4%",
    marginBottom: "1%",
    paddingHorizontal: "5%",
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginRight: 5,
  },
  statusText: {
    fontSize: 12,
    color: "#A5BFCC",
    fontStyle: "italic",
  },
});
