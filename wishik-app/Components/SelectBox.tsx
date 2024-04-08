import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import NewWishList from "../screens/NewWishList";
import { Link } from "expo-router";

interface Option {
  label: string;
  value: string;
}

interface PropTypes {
  title?: string;
  options: Option[];
  selectedOption: string;
  onSelect: (value: string) => void;
  additionalItem: string;
}
const linkPlus = require("../icons/plus.png");
const SelectBox: FC<PropTypes> = ({
  title,
  options,
  selectedOption,
  onSelect,
  additionalItem,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOptionPress = (value: string) => {
    onSelect(value);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <View style={styles.select}>
          <Text style={styles.selectedOption}>
            {selectedOption || "Choose wishlist"}
          </Text>
          <Image
            style={styles.img}
            source={require("../icons/drop-down.png")}
          />
        </View>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleOptionPress(option.value)}
            >
              <Text style={styles.option}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          <Link href="/newWishList" asChild>
            <View style={styles.additionalItem}>
              <View style={styles.blackCircle}>
                <Image source={linkPlus} style={styles.icon} />
              </View>
              <Text style={styles.addItem}>{additionalItem}</Text>
            </View>
          </Link>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
  },
  select: {
    padding: 18,
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {},
  selectedOption: {
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(123, 123, 123, 1)",
  },
  optionsContainer: {
    borderRadius: 6,
    padding: 28,
    borderWidth: 1,
    borderColor: "black",
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
  },
  option: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    padding: 10,
    textAlign: "left",
  },
  additionalItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 19,
    gap: 21,
  },
  blackCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "black",
  },
  icon: {
    width: 18,
    height: 18,
  },
  addItem: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
  },
});

export default SelectBox;
