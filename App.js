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

  return (
    // <Screens>
    //   <ListItem
    //     title="Message"
    //     IconComponent={<Icon name="email" size={45} backgroundcolor="red" />}
    //   />
    //   <ListItem
    //     title="Notifications"
    //     IconComponent={<Icon name="bell" size={45} backgroundcolor="blue" />}
    //   />
    // </Screens>

    <AppPicker
      selectedItem={category}
      onSelectItem={(item) => setCategory(item)}
      placeholder="Category"
      icons="apps"
      items={categories}
    />
  );
}
