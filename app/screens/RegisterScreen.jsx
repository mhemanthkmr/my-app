import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Formik } from "formik";
import AppTextInput from "../components/AppTextInput";
import * as Yup from "yup";
import Screens from "../components/Screens";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().max(20).label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function RegisterScreen() {
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
              placeholder="Name"
              autoCapitalize="none"
              icons="account"
              autoCorrect={false}
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
            />
            {touched.name && (
              <Text style={{ color: "red" }}>{errors.name}</Text>
            )}
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
              onPress={handleSubmit}
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
