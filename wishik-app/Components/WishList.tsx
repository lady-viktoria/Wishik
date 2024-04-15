import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";

interface PropTypes {
  onPress: () => void;
  name: any;
  picURL?: string;
}

const WishList: FC<PropTypes> = ({ name, picURL, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{ uri: picURL }} style={styles.picture} />
        {/* <Image source={picURL} style={styles.picture} /> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 23,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderRadius: 6,
    marginBottom: 13,
  },
  name: {},
  picture: {
    width: 45,
    height: 45,
    borderRadius: 6,
    backgroundColor: "rgba(178, 178, 178, 1)",
  },
});

export default WishList;
