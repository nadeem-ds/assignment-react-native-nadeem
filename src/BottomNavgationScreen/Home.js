import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";

const Home = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Welcome to home screen </Text>
      <Text style={Styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#F9FBFC",
    paddingVertical: 8,
    borderRadius: 10,
  },
  header: {
    textAlign: "center",
    marginVertical: 12,
    fontWeight: "bold",
    fontSize:20
  },
  text: {
    lineHeight:20
  },
});
