import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Screens from "../components/Screens";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroudColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroudColor: colors.secondary,
    },
  },
];

export default function AcountScreen() {
  return (
    <Screens style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="HemanthKumar"
          subTitle="m.hemanthkmr143@gmail.com"
          image={require("../assets/profile.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundcolor={item.icon.backgroudColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundcolor="#ffe66d" />}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroudColor: colors.primary,
  },
  container: {
    marginVertical: 20,
  },
});
