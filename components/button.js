import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ buttonText, onPress }) => {
  // Render the button only if buttonText is provided
  return buttonText ? (
    <Pressable onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  ) : null;
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: "#FA4A0C",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 100,
    color: "#F6F6F9",
    fontSize: 16,
  },
});
