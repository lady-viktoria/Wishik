import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import type { StatusBarStyle } from "react-native";
import React, { useState } from "react";
import ButtonNav from "../Components/buttons/ButtonNav";
import { useRouter } from "expo-router";
import Back from "../Components/buttons/Back";
import LineLong from "../Components/LineLong";

const linkPic = require("../icons/link.png");

export default function NewWishList() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back onPress={() => router.back()} text="Back" />
        <View style={styles.title}>New wishlist</View>
        <View style={styles.invisible}></View>
      </View>
      <LineLong style={{ marginLeft: -21, marginRight: -21 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 21,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 21,
    alignItems: "center",
  },
  title: {
    display: "flex",
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 27,
    letterSpacing: 0,
    color: "rgba(0, 0, 0, 1)",
  },
  invisible: {
    width: 40,
  },
  image: {
    marginTop: 22,
    display: "flex",
    alignItems: "center",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
});
