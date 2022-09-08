import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Screens({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
