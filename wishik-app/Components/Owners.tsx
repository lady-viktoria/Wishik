import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OwnerButton from "./buttons/OwnerButton";

export default function Owners() {
  const [activeButton, setActiveButton] = useState<string>("home");
  const handleButtonPress = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  return (
    <View style={styles.container}>
      <OwnerButton
        onPress={() => handleButtonPress("me")}
        text={"Me"}
        active={activeButton === "me"}
        flexVal={2}
      />
      <OwnerButton
        onPress={() => handleButtonPress("friends")}
        text={"Friends"}
        active={activeButton === "friends"}
        flexVal={3}
      />
      <OwnerButton
        onPress={() => handleButtonPress("recomendations")}
        text={"Recomendations"}
        active={activeButton === "recomendations"}
        flexVal={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 1)",
  },
});
