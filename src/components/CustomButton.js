import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "100%",
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
