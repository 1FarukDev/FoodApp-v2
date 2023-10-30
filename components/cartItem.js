import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import FoodItem from "./FoodItem";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../cart/cartReducer";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Function to increase quantity
  const inCreaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  // Function to decrease item
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
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
              <View style={styles.infoText}>
                <Text style={styles.cartPrice}>{item.price}</Text>
                <View style={styles.counter}>
                  <Pressable onPress={() => decreaseQuantity(item)}>
                    <Text style={styles.cartDetailCount}>-</Text>
                  </Pressable>
                  <Text style={styles.cartDetailCount}>{item.quantity}</Text>
                  <Pressable onPress={() => inCreaseQuantity(item)}>
                    <Text style={styles.cartDetailCount}>+</Text>
                  </Pressable>
                </View>
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
    width: 150,
  },
  cartPrice: {
    color: "red",

    flex: 1,
  },
  infoText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  counter: {
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  cartDetailCount: {
    color: "white",
  },
});
