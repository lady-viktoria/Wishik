import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

interface PropTypes {
  style?: object;
}

const LineLong: FC<PropTypes> = ({ style }) => {
  return <View style={[styles.line, style]}></View>;
};

const styles = StyleSheet.create({
  line: {
    height: 0.4,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default LineLong;
