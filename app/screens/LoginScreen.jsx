import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screens from "../components/Screens";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screens style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppTextInput
        placeholder="Email"
        autoCapitalize="none"
        icons="email"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <AppTextInput
        placeholder="Password"
        icons="lock"
        autoCapitalize="none"
        autoCorrect="false"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screens>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
