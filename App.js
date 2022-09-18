import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ProductList from "./app/screens/ProductList";
import ListingDetails from "./app/components/ListingDetails";
import ImageScreen from "./app/screens/ImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Screens from "./app/components/Screens";
import ListItem from "./app/components/ListItem";
import AcountScreen from "./app/screens/AcountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import colors from "./app/config/colors";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
export default function App() {
  // return <ListingDetails image={require("./app/assets/chair.jpg")} />;
  // return <ProductList />;
  // return <ImageScreen />;
  // return <MessagesScreen />;
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];
  const [category, setCategory] = useState(categories[0]);

  return <RegisterScreen />;
}
