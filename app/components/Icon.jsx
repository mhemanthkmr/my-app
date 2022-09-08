import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 40,
  backgroundcolor = "#fff",
  iconColor = "#000",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundcolor,
        iconColor: iconColor,
      }}
    >
      <MaterialCommunityIcons name={name} />
    </View>
  );
}

const styles = StyleSheet.create({});
