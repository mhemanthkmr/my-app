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
export default function App() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 80 }}>
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("./app/assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$200"
          image={require("./app/assets/background.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("./app/assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$290"
          image={require("./app/assets/background.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("./app/assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("./app/assets/background.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("./app/assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("./app/assets/background.jpg")}
        />
      </View>
    </ScrollView>
  );
}
