import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";

export default function Screens({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
