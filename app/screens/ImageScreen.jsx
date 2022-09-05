import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <TouchableOpacity style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </TouchableOpacity>
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
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    color: colors.white,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
    color: colors.white,
  },
});
