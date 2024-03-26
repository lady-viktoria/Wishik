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

interface PropTypes {
  onPress: () => void;
  iconURL?: ImageSourcePropType;
  active: boolean;
}

const ButtonNav: FC<PropTypes> = ({ onPress, iconURL, active }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View style={active ? styles.buttonPressed : styles.buttonContent}>
        <Image source={iconURL} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginHorizontal: 0,
    height: 40,
    borderBottomWidth: 0,
    justifyContent: "center",
  },
  buttonContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderTopWidth: 1,
    borderTopColor: "white",
  },
  buttonPressed: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderTopWidth: 1,
    borderTopColor: "black",
  },
});

export default ButtonNav;
