import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Screens from "../components/Screens";
import Card from "../components/Card";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red Shirt for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for Sale",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Couch for Sale",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 4,
    title: "Chair for Sale",
    price: 380,
    image: require("../assets/chair.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <ScrollView nestedScrollEnabled={false} style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$ " + item.price}
            image={item.image}
          />
        )}
        // ListHeaderComponent={ContentThatGoesAboveTheFlatList}
        // ListFooterComponent={ContentThatGoesBelowTheFlatList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
