import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const signInPressed = () => {
    navigation.navigate("home");
    setUsername("");
    setPassword("");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Sign In</Text>
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
      <CustomButton onPress={signInPressed} text={"SignIn"} />
      <Text>
        Dont have account{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
          Register
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;
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
