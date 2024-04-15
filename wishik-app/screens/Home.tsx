import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Owners from "../Components/Owners";
import LineLong from "../Components/LineLong";
import WishItem from "../Components/WishList";
import WishList from "../Components/WishList";
import Back from "../Components/buttons/Back";
import Edit from "../Components/buttons/Edit";
import EditWishList from "./EditWishList";

const userId = "mgffxrdesxjcfrset";
const ts = Date.now();
const wishLists: WishListDb[] = [
  {
    id: "1",
    userId: userId,
    name: "AAAAAAAA",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "2",
    userId: userId,
    name: "BBBBBBBB",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "3",
    userId: userId,
    name: "CCCCCCC",
    createdTs: ts,
    updatedTs: ts,
  },
];
const wishes: WishDb[] = [
  {
    id: "1",
    userId: userId,
    name: "111",
    picUrl: "../icons/cat.png",
    wishListId: "1",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "2",
    userId: userId,
    name: "222",
    picUrl: "../icons/cat.png",
    wishListId: "1",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "3",
    userId: userId,
    name: "333",
    wishListId: "1",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "4",
    userId: userId,
    name: "qqqqq",
    wishListId: "2",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "5",
    userId: userId,
    name: "wwwww",
    wishListId: "2",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "5",
    userId: userId,
    name: "eeeeee",
    wishListId: "2",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "6",
    userId: userId,
    name: "9999999",
    wishListId: "3",
    createdTs: ts,
    updatedTs: ts,
  },
  {
    id: "7",
    userId: userId,
    name: "0000000",
    wishListId: "3",
    createdTs: ts,
    updatedTs: ts,
  },
];

export default function Home() {
  const [wishListId, setWishListId] = useState<string>("");
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.title}>Wishlist</Text>
      <Owners />
      <LineLong style={{ marginTop: 27, marginLeft: -21, marginRight: -21 }} />
      <View>
        {wishListId !== "" ? (
          <View>
            <View style={styles.headerOfList}>
              <Back
                onPress={() => {
                  setWishListId("");
                }}
                text="Back"
              />
              <Text style={styles.listName}>
                {/* {wishes.map((wish) => {
                return <WishItem name={wish.name} onPress={() => {}} />;
              })} */}
                {wishLists
                  .filter((w) => w.id === wishListId)
                  .map((w) => {
                    return <Text>{w.name}</Text>;
                  })}
              </Text>
              <Edit onPress={() => {}} text="Edit" />
              {/* <View style={styles.invisible}></View> */}
            </View>
            <Text>список вишев из какого-то определённого вишЛиста</Text>
            {wishes
              .filter((wish) => wish.wishListId === wishListId)
              .map((wish) => {
                return <WishItem name={wish.name} onPress={() => {}} />;
              })}
          </View>
        ) : (
          <View>
            <Text style={styles.text}>My wishlists</Text>
            {wishLists.map((w) => {
              return (
                <WishList
                  name={w.name}
                  picURL={w.picUrl}
                  onPress={() => {
                    setWishListId(w.id);
                  }}
                />
              );
            })}
          </View>
        )}
      </View>

      <Text style={styles.text}>
        Add a wish by clicking the "+" button below
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 21,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    marginTop: 37,
    marginLeft: 23,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: "Comfortaa",
    fontWeight: "400",
  },
  text: {
    marginTop: 146,
    marginHorizontal: 39,
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
  },
  headerOfList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 21,
    alignItems: "center",
  },
  invisible: {
    width: 40,
  },
  myWishlists: {
    display: "flex",
    flexDirection: "column",
  },
  listName: {
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
  },
});
