import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import type { StatusBarStyle } from "react-native";
import React, { FC, useState } from "react";
import ButtonNav from "../Components/buttons/ButtonNav";
import { useRouter } from "expo-router";
import Back from "../Components/buttons/Back";
import LineLong from "../Components/LineLong";
import WishImg from "../Components/NewWish/WishImg";
import InputText from "../Components/InputText";
import CheckBox from "../Components/CheckBox";
import CustomButton from "../Components/buttons/CustomButton";

const linkPic = require("../icons/link.png");
const userPic = require("../icons/cat.png");

const options = [
  { label: "Private", value: "option1" },
  { label: "Friends", value: "option2" },
  { label: "Public", value: "option3" },
];
interface PropTypes {
  wishList?: WishListDb;
  onSave: () => void;
}
const EditWishList: FC<PropTypes> = ({ wishList, onSave }) => {
  const router = useRouter();
  const [picURL, setPicURL] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  ////////////////////RADIO BUTTON
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back onPress={() => router.back()} text="Back" />
        <View style={styles.title}>New wishlist</View>
        <View style={styles.invisible}></View>
      </View>
      <LineLong style={{ marginLeft: -21, marginRight: -21 }} />
      <View style={styles.image}>
        <WishImg onPress={() => setPicURL(userPic)} picURL={picURL} />
      </View>
      <View style={styles.fields}>
        <InputText
          title="Name"
          text={name}
          placeholder={"Enter name"}
          onTextChanged={setName}
        />
        <InputText
          title="Description"
          text={descr}
          placeholder={"Enter description"}
          onTextChanged={setDescr}
          numberOfLines={4}
        />
        <CheckBox
          title={"Publication"}
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
        <CustomButton onPress={onSave} text="Create wishlist" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 21,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 21,
    alignItems: "center",
  },
  title: {
    display: "flex",
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 27,
    letterSpacing: 0,
    color: "rgba(0, 0, 0, 1)",
  },
  invisible: {
    width: 40,
  },
  image: {
    marginTop: 22,
    display: "flex",
    alignItems: "center",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
});
