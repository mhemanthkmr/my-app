import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screens from "../components/Screens";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "HemanthKumar M",
    description: "How are you Sir ?",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "Jorge Kum",
    description: "Where is my Product ?",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Jeff Besozz",
    description: "Give me 10$ I am Hungry.",
    image: require("../assets/jacket.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({});
