import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../components/SignInScreen";
import SignUpButton from "../components/SignUpButton";
import Welcome from "../components/Welcome";
// import SignInScreen from "./src/components/SignInScreen";
// import SignUpButton from "./src/components/SignUpButton";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpButton} />
        <Stack.Screen name="home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
