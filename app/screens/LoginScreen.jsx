import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screens from "../components/Screens";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screens style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              placeholder="Email"
              autoCapitalize="none"
              icons="email"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              textContentType="emailAddress"
            />
            {touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <AppTextInput
              placeholder="Password"
              icons="lock"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            {touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <AppText style={styles.forgotPassword}>Forget Password ?</AppText>
            <AppButton
              title="Login"
              color={colors.primary}
              onPress={() => {
                handleSubmit();
                navigation.navigate("ListingScreen");
              }}
            />
          </>
        )}
      </Formik>
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
  forgotPassword: {
    marginVertical: 10,
    alignSelf: "flex-end",
    marginRight: 10,
    fontSize: 15,
  },
});
