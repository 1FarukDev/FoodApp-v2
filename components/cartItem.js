import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <View style={styles.foodLst}>
      {cart.map((item) => {
        return (
          <>
            <Text>{item.name}</Text>
            <Image source={item.image} style={styles.image} />
          </>
        );
      })}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
