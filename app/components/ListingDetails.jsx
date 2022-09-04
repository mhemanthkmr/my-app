import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListingDetails({ image }) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
  },
});
