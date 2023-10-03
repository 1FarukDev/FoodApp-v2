import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const FoodItem = ({ item }) => {
  return (
    <View style={styles.foodList}>
      <Image source={item.image} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodPrice}>{item.price}</Text>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  foodList: {
    marginRight: 20,
    paddingHorizontal: 5,
    borderRadius: 30,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 300,
    backgroundColor: "#ffff",
  },
  foodImage: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "600",
    width: "70%",
    textAlign: "center",
    marginTop: 25,
  },
  foodPrice: {
    color: "#FA4A0C",
    fontSize: 15,
    marginTop: 10,
    fontWeight: "700",
  },
});
