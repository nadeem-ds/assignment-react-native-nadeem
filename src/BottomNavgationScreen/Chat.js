import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Chat = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Welcome to Chat screen </Text>
      <Text style={Styles.text}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Text>
    </View>
  );
};

export default Chat;
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
