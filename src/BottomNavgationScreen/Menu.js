import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
const Menu = () => {
  const navigation = useNavigation();
  const logoutPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Welcome to Menu screen </Text>
      <Text style={Styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </Text>
      {/* <Text> */}
      {/* <Ionicons name="exit" size={30} color="black" /> */}
      <CustomButton onPress={logoutPressed} text={"Logout"} />
      {/* </Text> */}
    </View>
  );
};

export default Menu;
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
    fontSize: 20,
  },
  text: {
    lineHeight: 20,
  },
});
