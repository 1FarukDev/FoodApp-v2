import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <View style={styles.Container}>
      {cart.map((item) => {
        return (
          <View key={item.id} style={styles.cartContainer}>
            <View>
              <Image source={item.image} style={styles.cartImage} />
            </View>
            <View style={styles.cartInfo}>
              <Text>{item.name}</Text>
              <View>
                <Text style={styles.cartPrice}>{item.price}</Text>
                <Text style={styles.cartPrice}>{item.price}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
  },
  cartImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  cartInfo: {
    marginLeft: 15,
  },
  cartPrice: {
    color: "red",
    marginTop: 10,
  },
});
