import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpButton = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  const signUpPressed = () => {
    alert("Register pressed");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Register</Text>
      <CustomInput placeholder="Name" value={name} setValue={setName} />
      <CustomInput
        placeholder="username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Confirm password"
        value={confirmpassword}
        setValue={setConfirmPassword}
        secureTextEntry
      />
      <CustomButton onPress={signUpPressed} text={"Register"} />
      <Text>
        Already have account{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("SignIn")}>
          login
        </Text>
      </Text>
    </View>
  );
};

export default SignUpButton;
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "green",
  },
});
