import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from "react-native";

// import { useFonts } from 'expo-font';
// const [loaded] = useFonts({'Open Sans': require('../../assets/fonts/Comfortaa/Comfortaa-Regular')});

interface PropTypes {
  onPress: () => void;
  iconURL?: ImageSourcePropType;
  text: string;
}

const CustomButton: FC<PropTypes> = ({ onPress, iconURL, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <Image source={iconURL} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 1)",
    // backgroundColor: 'rgba(217, 217, 217, 1)',
  },
  buttonContent: {
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 20,
    width: 20,
    height: 20,
  },
  text: {
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    color: "#rgba(0, 0, 0, 1)",
    textAlign: "center",
  },
});

export default CustomButton;
