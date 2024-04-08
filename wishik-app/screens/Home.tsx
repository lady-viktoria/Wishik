import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Owners from "../Components/Owners";
import LineLong from "../Components/LineLong";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.title}>Wishlist</Text>
      <Owners />
      <LineLong style={{ marginTop: 27, marginLeft: -21, marginRight: -21 }} />
      <Text style={styles.text}>
        Add a wish by clicking the "+" button below
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 21,
    flexDirection: "column",
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
