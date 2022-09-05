import { Image, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.leftButton} />
      <View style={styles.rightButton}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  leftButton: {
    position: "absolute",
    top: 50,
    left: 40,
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
  },
  rightButton: {
    position: "absolute",
    top: 50,
    right: 40,
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
  },
});
