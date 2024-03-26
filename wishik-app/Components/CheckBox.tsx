import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Option = {
  label: string;
  value: string;
};
interface PropTypes {
  title?: string;
  options: Option[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const CheckBox: FC<PropTypes> = ({
  title,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.options}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={styles.radioButton}
            onPress={() => onSelect(option.value)}
          >
            <View style={styles.radioCircle}>
              {selectedOption === option.value && (
                <View style={styles.selectedRadioCircle} />
              )}
            </View>
            <Text style={styles.radioText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  options: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
  radioButton: {
    flexDirection: "column",
    alignItems: "center",
  },
  radioCircle: {
    margin: 7,
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadioCircle: {
    width: 17,
    height: 17,
    borderRadius: 100,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  radioText: {
    fontFamily: "Comfortaa",
    fontWeight: "400",
    fontSize: 10,
    color: "rgba(123, 123, 123, 1)",
  },
});

export default CheckBox;
