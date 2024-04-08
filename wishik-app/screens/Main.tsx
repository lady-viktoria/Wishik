import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import type { StatusBarStyle } from "react-native";
import React, { useState } from "react";
import ButtonNav from "../Components/buttons/ButtonNav";
import { Link } from "expo-router";
import Add from "../Components/buttons/Add";
import Home from "./Home";

const homePic = require("../icons/home.png");
const searchPic = require("../icons/search.png");
const plusPic = require("../icons/plus.png");
const commentPic = require("../icons/comment.png");
const personPic = require("../icons/person.png");

export default function Main() {
  const [activeButton, setActiveButton] = useState<string>("home");
  const handleButtonPress = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {activeButton === "home" ? <Home /> : null}
          {activeButton === "search" ? <Text> Search </Text> : null}
          {activeButton === "comment" ? <Text> comment </Text> : null}
          {activeButton === "person" ? <Text> person </Text> : null}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <ButtonNav
            onPress={() => handleButtonPress("home")}
            iconURL={homePic}
            active={activeButton === "home"}
          />
          <ButtonNav
            onPress={() => handleButtonPress("search")}
            iconURL={searchPic}
            active={activeButton === "search"}
          />
          <Link href="/newWish" asChild>
            <Add
              onPress={() => {}}
              iconURL={plusPic}
              active={activeButton === ""}
            />
          </Link>

          <ButtonNav
            onPress={() => handleButtonPress("comment")}
            iconURL={commentPic}
            active={activeButton === "comment"}
          />
          <ButtonNav
            onPress={() => handleButtonPress("person")}
            iconURL={personPic}
            active={activeButton === "person"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 9,
    paddingHorizontal: 11,
    paddingBottom: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    // display: 'flex',
    // flex: 1,
    // marginHorizontal: 0,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});
