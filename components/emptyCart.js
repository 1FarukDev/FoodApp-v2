import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import EmptyIcon from "../assets/icon/empty.png";
const EmptyCart = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.cartImage}>
        <Image source={require("../assets/icon/empty.png")} />
      </View>
      <Text style={styles.noOrderText}>No Order Yet</Text>
      <Text style={styles.suggestionText}>
        Hit the orange button down {"\n"} below to Create an order
      </Text>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  cartImage: {
    // flex: 0.8,
    justifyContent: "center",
  },
  noOrderText: {
    fontWeight: "400",
    fontSize: 35,
    textAlign: "center",
    marginTop: 20,
  },
  suggestionText: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
  },
});
