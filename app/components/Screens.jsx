import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import { View } from "react-native-web";

export default function Screens({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
