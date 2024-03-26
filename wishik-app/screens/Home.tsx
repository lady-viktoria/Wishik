import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Owners from "../Components/Owners";
import LineLong from "../Components/LineLong";

export default function LogIn() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.title}>Wishlist</View>
      <Owners />
      <LineLong style={{ marginTop: 27, marginLeft: -21, marginRight: -21 }} />
      <View style={styles.text}>
        Add a wish by clicking the "+" button below
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 21,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    marginTop: 37,
    marginLeft: 23,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: "Comfortaa",
    fontWeight: "400",
  },
  text: {
    marginTop: 146,
    marginHorizontal: 39,
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
  },
});
