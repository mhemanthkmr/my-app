import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
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
export default function App() {
  // return <ListingDetails image={require("./app/assets/chair.jpg")} />;
  // return <ProductList />;
  // return <ImageScreen />;
  // return <MessagesScreen />;
  return <Icon name="email" size={100} backgroundcolor="red" />;
}
