import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Tweets = () => {
  <Screen>
    <Text>Hello Word</Text>
  </Screen>;
};

const TweetDetails = () => {
  <Screen>
    <Text>TweetDetails</Text>
  </Screen>;
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetail" component={TweetDetails} />
  </Stack.Navigator>;
};
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

//719jme1d
