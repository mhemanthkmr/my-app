import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
export default function AppTextInput({ icons, placeholder }) {
  return (
    <View style={styles.container}>
      {icons && (
        <MaterialCommunityIcons
          style={styles.color}
          color={colors.medium}
          name={icons}
          size={20}
        />
      )}
      <TextInput placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textinput: {
    fontSize: 18,
    color: colors.dark,
  },
  icon: {
    color: colors.medium,
    alignContent: "center",
    marginRight: 10,
  },
});
