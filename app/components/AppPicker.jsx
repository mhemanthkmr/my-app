import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "./AppButton";
export default function AppPicker({
  icons,
  items,
  placeholder,
  ...otherprops
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icons && (
            <MaterialCommunityIcons
              style={styles.icon}
              color={colors.medium}
              name={icons}
              size={20}
            />
          )}
          <Text style={styles.textinput}>{placeholder}</Text>
          <MaterialCommunityIcons
            style={styles.icon}
            color={colors.medium}
            name={"chevron-down"}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppButton
          title="Close"
          color={colors.secondary}
          onPress={() => setModalVisible(false)}
        />
      </Modal>
    </>
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
    flex: 1,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
