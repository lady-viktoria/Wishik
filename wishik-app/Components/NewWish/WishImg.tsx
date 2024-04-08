import React, { FC } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

interface PropTypes {
  onPress: () => void;
  picURL?: string;
}

const WishImg: FC<PropTypes> = ({ onPress, picURL }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View>
        <View style={styles.camera}>
          <Image
            style={{ maxWidth: 73, maxHeight: 73, borderRadius: 100 }}
            source={picURL || require("../../icons/camera.png")}
          />
        </View>
        <View style={styles.whiteCircle}>
          <View style={styles.blackCircle}>
            <Image
              source={require("../../icons/plusWhite.png")}
              style={{ width: 22, height: 22 }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    padding: 4,
  },
  camera: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(217, 217, 217, 1)",
    width: 73,
    height: 73,
    borderRadius: 100,
  },
  whiteCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 2,
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "white",
  },
  blackCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
});

export default WishImg;
