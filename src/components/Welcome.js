import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../BottomNavgationScreen/Home";
import { NavigationContainer } from "@react-navigation/native";
import About from "../BottomNavgationScreen/About";
import Chat from "../BottomNavgationScreen/Chat";
import Menu from "../BottomNavgationScreen/Menu";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const Tab = createBottomTabNavigator();
const Welcome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="home" size={30} color={tintColor} />
          ),
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="heart" size={30} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="chatbubble" size={30} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="menu" size={30} color={tintColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Welcome;
