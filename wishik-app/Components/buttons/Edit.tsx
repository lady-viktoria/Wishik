import React, { FC } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface PropTypes {
  onPress: () => void;
  text: string;
}

const Edit: FC<PropTypes> = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 4,
  },
  buttonContent: {
    color: "white",
    alignItems: "center",
  },
  text: {
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: "400",
    color: "#rgba(0, 0, 0, 1)",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: -0.3333333432674408,
  },
});

export default Edit;
