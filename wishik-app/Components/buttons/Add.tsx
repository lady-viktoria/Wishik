import React, { FC, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from "react-native";

interface PropTypes {
  onPress: () => void;
  iconURL?: ImageSourcePropType;
  active: boolean;
}

const Add: FC<PropTypes> = ({ onPress, iconURL, active }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View style={active ? styles.buttonPressed : styles.buttonContent}>
        <Image source={iconURL} style={styles.icon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 9,
    flex: 1, // Элементы занимают все доступное пространство
    marginHorizontal: 0,
    paddingVertical: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0)",
    width: 70,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 1)",
    // backgroundColor: 'rgba(217, 217, 217, 1)',
  },
  buttonContent: {
    alignItems: "center",
  },
  icon: {
    width: 13,
    height: 13,
  },
  buttonPressed: {
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default Add;
