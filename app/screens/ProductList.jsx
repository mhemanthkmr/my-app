import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Card from "../components/Card";
export default function ProductList() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 80 }}>
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("../assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$200"
          image={require("../assets/background.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("../assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$200"
          image={require("../assets/background.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("../assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$200"
          image={require("../assets/background.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$100"
          image={require("../assets/chair.jpg")}
        />
        <Card
          title="Red Jacket for Sale"
          subTitle="$200"
          image={require("../assets/background.jpg")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
