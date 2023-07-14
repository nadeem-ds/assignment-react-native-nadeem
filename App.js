import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/components/SignInScreen";
import SignUpButton from "./src/components/SignUpButton";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    marginTop: 80,
  },
});
