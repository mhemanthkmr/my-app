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
import Screens from "./app/components/Screens";
import ListItem from "./app/components/ListItem";
import AcountScreen from "./app/screens/AcountScreen";
import ListingScreen from "./app/screens/ListingScreen";
export default function App() {
  // return <ListingDetails image={require("./app/assets/chair.jpg")} />;
  // return <ProductList />;
  // return <ImageScreen />;
  // return <MessagesScreen />;
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

    <ScrollView nestedScrollEnabled={true}>
      <ListingScreen />
    </ScrollView>
  );
}
