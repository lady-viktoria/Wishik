import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

interface PropTypes {
  text: string;
  placeholder: string;
  onTextChanged: (text: string) => void;
  title?: string;
  iconURL?: ImageSourcePropType;
  numberOfLines?: number;
}

const InputText: FC<PropTypes> = ({
  text,
  placeholder,
  onTextChanged,
  title,
  iconURL,
  numberOfLines,
}) => {
  return (
    <View>
      <View style={styles.titleWithIcon}>
        <Image source={iconURL} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <TextInput
        style={styles.input}
        selectionColor=""
        underlineColorAndroid="transparent"
        value={text}
        placeholder={placeholder}
        onChangeText={(text) => onTextChanged(text)}
        editable
        multiline
        numberOfLines={numberOfLines || 1}

        // onChange={(event) => {
        //   onTextChanged(event.target.value);
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleWithIcon: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  icon: {
    display: "flex",
    // width: 20,
    // height: 20,
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
  },
  input: {
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderRadius: 6,
    display: "flex",
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginTop: 8,
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(123, 123, 123, 1)",
  },
});

export default InputText;
