import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Screens from "../components/Screens";
const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
    backgroundColor: "#dbdbdb",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
    backgroundColor: "red",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
    backgroundColor: "red",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
    backgroundColor: "red",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
    backgroundColor: "red",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
    backgroundColor: "blue",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Deserts",
    backgroundColor: "red",
  },
];
export default function Catogeries() {
  return (
    <Screens>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View key={index} style={styles.scrollbar}>
              <View
                style={[
                  styles.icons,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Image source={items[index].image} style={styles.image} />
              </View>
              <Text style={styles.text}>{items[index].text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </Screens>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  scrollbar: {
    alignItems: "center",
    marginRight: 20,
  },
  icons: {
    width: 40,
    height: 40,
    backgroundColor: "#dcdcdc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    justifyContent: "center",
  },
  text: { fontSize: 10, fontWeight: "500" },
});
