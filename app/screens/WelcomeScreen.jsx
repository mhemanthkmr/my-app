import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.welcomeText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            console.log("Button Pressed");
          }}
          color={colors.primary}
        />
        <AppButton title="Register" color={colors.secondary} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    margin: 25,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // width: "100%",
    // height: "100%",
  },
  buttonContainer: {
    width: "90%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
