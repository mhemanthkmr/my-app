import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItemSeperator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        marginVertical: 5,
        backgroundColor: colors.light,
      }}
    />
  );
}

const styles = StyleSheet.create({});
