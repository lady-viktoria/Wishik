import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import type { StatusBarStyle } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Back from "../Components/buttons/Back";
import LineLong from "../Components/LineLong";
import WishImg from "../Components/NewWish/WishImg";
import InputText from "../Components/InputText";
import CheckBox from "../Components/CheckBox";
import SelectBox from "../Components/SelectBox";
import CustomButton from "../Components/buttons/CustomButton";

const linkPic = require("../icons/link.png");
const userPic = require("../icons/cat.png");
// const userPic =
//   "https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.1908636980.1711497600&semt=ais";

const options = [
  { label: "Private", value: "option1" },
  { label: "Friends", value: "option2" },
  { label: "Public", value: "option3" },
];
const selections = [
  { label: "День Рождения", value: "День Рождения" },
  { label: "Новый Год", value: "Новый Год" },
  { label: "8 Марта", value: "8марта" },
];

export default function NewWish() {
  const router = useRouter();
  ////////////////////RADIO BUTTON
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };
  ///////////////////SELECTBOX
  const [selectedWish, setSelectedWish] = useState("");
  const handleWishSelect = (wish: string) => {
    setSelectedWish(wish);
  };

  const [activeButton, setActiveButton] = useState<string>("home");
  const handleButtonPress = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  const [name, setName] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [picURL, setPicURL] = useState<string>("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back onPress={() => router.back()} text="Back" />
        <Text style={styles.title}>New wish</Text>
        <View style={styles.invisible}></View>
      </View>
      <LineLong style={{ marginLeft: -21, marginRight: -21 }} />
      <View style={styles.image}>
        <WishImg
          // onPress={function (): void {
          //   setPicURL(userPic);
          // }}
          // picURL={picURL}
          onPress={() => setPicURL(userPic)}
          picURL={picURL}
        />
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
        <InputText
          iconURL={linkPic}
          title="Link"
          text={link}
          placeholder={"Enter link"}
          onTextChanged={setLink}
        />
        <CheckBox
          title={"Publication"}
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
        <SelectBox
          title={"Wishlist"}
          options={selections}
          selectedOption={selectedWish}
          onSelect={handleWishSelect}
          additionalItem={"Add wishlist"}
        />
        <CustomButton
          onPress={() => console.log("Кнопка нажата")}
          text="Save"
        />
      </View>
    </View>
  );
}

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
