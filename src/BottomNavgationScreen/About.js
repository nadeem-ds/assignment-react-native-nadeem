import { View, Text, StyleSheet } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Welcome to About screen </Text>
      <Text style={Styles.text}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </Text>
      
    </View>
  );
};

export default About;
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
