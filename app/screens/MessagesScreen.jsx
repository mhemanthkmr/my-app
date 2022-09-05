import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screens from "../components/Screens";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/jacket.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screens>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Mesage Clicked", item)}
            renderRightActions={() => <ListItemDeleteAction />}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({});
