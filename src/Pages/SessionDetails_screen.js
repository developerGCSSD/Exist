/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HeaderTitle from "../Components/HeaderTitle";
import DetailsCard from "../Components/DetailsCard";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../Components/Spacer";
import PrimaryButton from "../Components/PrimaryButton";
import IntakeContainer from "../Components/IntakeContainer";
import SecondaryButton from "../Components/SecondaryButton";
import BottomSheetModal from "../Components/BottomSheetModal";
import { Provider } from "react-native-paper";

export default function SessionDetails_screen({ route }) {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleOpenBottomSheet = () => setIsBottomSheetVisible(true);
  const handleCloseBottomSheet = () => setIsBottomSheetVisible(false);

  const menuActions =
    route.params?.sessionType?.toLowerCase() === "first"
      ? [
          { title: "Schedule Upcoming Sessions", action: () => handleAction("Schedule Upcoming Sessions") },
          { title: "Transfer To Another Therapist", action: () => handleAction("Transfer To Another Therapist") }
        ]
      : [
          { title: "Reschedule Next Session", action: () => handleAction("Reschedule Next Session") },
          { title: "Transfer To Another Therapist", action: () => handleAction("Transfer To Another Therapist") },
          { title: "Change Session Method", action: () => handleAction("Change Session Method") }
        ];

  const handleAction = (action) => {
    console.log("Selected action:", action);
    handleCloseBottomSheet();
  };

  return (
    <Provider> 
      <Header
        title="Session Details"
        leftIcon={"arrow-back-ios"}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
      <Spacer height={'5%'}></Spacer>
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <HeaderTitle text="Client Details" fontSize={24} fontColor="#666" fontWeight="bold" />
          </View>
          <SecondaryButton text={"Create Request"} width={"35%"} fontSize={12} onPress={handleOpenBottomSheet} borderRadius={10}/>
        </View>

        <Spacer height={"5%"} />

        <DetailsCard
          time={`${route.params?.sessionStartTime} - ${route.params?.sessionEndTime}`}
          clientName={route.params?.clientName}
          issue={route.params?.issue || "N/A"}
          sessionType={route.params?.sessionType}
          lastVisit={route.params?.lastVisit || "N/A"}
          sessionMethod={route.params?.sessionMethod}
        />

        <Spacer height={"6%"} />
        <IntakeContainer
          clientId={route.params?.id}
          onPress={() =>
            navigation.navigate("IntakeInfo", {
              clientId: route.params?.id,
            })
          }
        />

        <Spacer height={"6%"} />

        <View style={styles.buttonsContainer}>
          <PrimaryButton text={"Check in"} borderRadius={10} width={"60%"} fontSize={14} height={45} />
          <SecondaryButton text={"No Show"} borderRadius={10} width={"40%"} fontSize={14} height={45} />
        </View>
      </View>

      <BottomSheetModal
        visible={isBottomSheetVisible}
        onDismiss={handleCloseBottomSheet}
        menuActions={menuActions}
        title={'Create Request'}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
