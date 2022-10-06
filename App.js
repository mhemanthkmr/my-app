import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Catogeries from "./app/components/Categories";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("MessageScreen")}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       options={{
    //         headerStyle: {
    //           backgroundColor: "tomato",
    //         },
    //         headerTintColor: "white",
    //         headerShown: false,
    //       }}
    //       component={WelcomeScreen}
    //     />
    //     <Stack.Screen
    //       name="MessageScreen"
    //       options={{
    //         headerStyle: {
    //           backgroundColor: "tomato",
    //         },
    //         headerTintColor: "white",
    //         headerShown: false,
    //       }}
    //       component={MessagesScreen}
    //     />
    //     <Stack.Screen
    //       name="LoginScreen"
    //       options={{
    //         headerStyle: {
    //           backgroundColor: "tomato",
    //         },
    //         headerTintColor: "white",
    //         headerShown: false,
    //       }}
    //       component={LoginScreen}
    //     />
    //     <Stack.Screen
    //       name="RegisterScreen"
    //       options={{
    //         headerStyle: {
    //           backgroundColor: "tomato",
    //         },
    //         headerTintColor: "white",
    //         headerShown: false,
    //       }}
    //       component={RegisterScreen}
    //     />
    //     <Stack.Screen
    //       name="ListingScreen"
    //       options={{
    //         headerStyle: {
    //           backgroundColor: "tomato",
    //         },
    //         headerTintColor: "white",
    //         // headerShown: false,
    //       }}
    //       component={ListingScreen}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <ListingScreen />
    <Catogeries />
  );
}

export default App;
// ... other code from the previous section
