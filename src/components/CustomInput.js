import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        Style={styles.inputText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderColor: "e8e8",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  inputText: {
    padding: 8,
  },
});
