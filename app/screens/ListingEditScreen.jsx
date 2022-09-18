import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screens from "../components/Screens";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import PickerItem from "../components/PickerItem";
import AppPicker from "../components/AppPicker";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function ListingEditScreen() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screens style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              maxLength={255}
              placeholder="Title"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("title")}
              onBlur={() => setFieldTouched("title")}
            />
            {touched.title && (
              <Text style={{ color: "red" }}>{errors.title}</Text>
            )}
            <AppTextInput
              maxLength={8}
              placeholder="Price"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("price")}
              onBlur={() => setFieldTouched("price")}
            />
            {touched.price && (
              <Text style={{ color: "red" }}>{errors.price}</Text>
            )}
            <AppPicker
              icons="apps"
              selectedItem={category}
              onSelectItem={(item) => setCategory(item)}
              placeholder="Catagory"
              items={categories}
            />
            <AppTextInput
              maxLength={255}
              multiline
              placeholder="Description"
              autoCapitalize="none"
              numberOfLines={3}
              autoCorrect={false}
              onChangeText={handleChange("description")}
              onBlur={() => setFieldTouched("description")}
            />
            {touched.description && (
              <Text style={{ color: "red" }}>{errors.description}</Text>
            )}
            <AppButton
              title="POST"
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
