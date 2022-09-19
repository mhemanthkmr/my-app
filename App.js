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

const TweetDetails2 = () => {
  <Screen>
    <Text>TweetDetails2</Text>
  </Screen>;
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetail" component={TweetDetails} />
    <Stack.Screen name="TweetDetails2" component={TweetDetails2} />
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
