/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View,StyleSheet, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import IntakeTabs from "../Components/IntakeTabs";
import BasicInfo from "../Components/BasicInfo"; // Import BasicInfo component
import EmergencyAndFamily from "../Components/EmergencyAndFamily";
import PhysicalHealth from "../Components/PhysicalHealth";
import MentalHealth from "../Components/MentalHealth";

export default function IntakeInfo_screen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { clientId } = route.params;
  // console.log("client id", clientId);
  const [selectedTab, setSelectedTab] = useState("Basic Information");

  const tabs = [
    "Basic Information",
    "Emergency & Family",
    "Physical Health",
    "Mental Health",
  ];

  const basicInfoData = [
    { label: "Date of initial visit:", value: "20/1/2025" },
    { label: "Full name:", value: "Mohamed Ahmed Attia" },
    { label: "Date of Birth:", value: "18/3/1990" },
    { label: "Gender:", value: "Male" },
    { label: "Nationality:", value: "Egyptian" },
    { label: "Address:", value: "Nasr City" },
    { label: "Email:", value: "Mohamed@gmail.com" },
    { label: "Home Phone:", value: "0842472741" },
  ];
  const emergencyData = [
    { label: "Emergency Contact:", value: "Ali Ahmed Attia" },
    { label: "Relationship:", value: "Brother" },
    { label: "Home Phone/Mobile phone:", value: "+20102884686" },
    { label: "E-mail:", value: "Ali@gmail.com" },
    { label: "Address:", value: "Nasr City" },
  ];

  const familyData = [
    { label: "Marital Status", value: "Married" },
    { label: "Name of spouse/partner :", value: "Mai" },
    { label: "How long have you been together ?", value: "5 Years" },
    { label: "Partner’s occupation ?", value: "Doctor" },
    { label: "Child's full name", value: "Ahmed Mohamed Attia" },
    { label: "Child's age", value: "4 years" },
  ];

  return (
    <>
      <Header
        title="Intake Details"
        leftIcon={"arrow-back-ios"}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
          contentContainerStyle={{ paddingRight: "10%" }}
        >
          {tabs.map((tab, index) => (
            <IntakeTabs
              key={index}
              title={tab}
              isSelected={selectedTab === tab}
              onPress={() => setSelectedTab(tab)}
            />
          ))}
        </ScrollView>

        <ScrollView
          style={styles.contentContainer}
          contentContainerStyle={{ flexGrow: 1, paddingBottom:'25%' }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {selectedTab === "Basic Information" && (
            <BasicInfo data={basicInfoData} />
          )}

          {selectedTab === "Emergency & Family" && (
            <EmergencyAndFamily
              emergencyData={emergencyData}
              familyData={familyData}
            />
          )}

          {selectedTab === "Physical Health" && (
            <PhysicalHealth></PhysicalHealth>
          )}

          {selectedTab === "Mental Health" && (
            <MentalHealth></MentalHealth>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: "#fff",
  },
  tabsContainer: {
    flexDirection: "row",
    maxHeight: "10%",
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
  },
});
