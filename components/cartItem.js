import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Animated,
  ScrollView,
  Alert,
} from "react-native";
import React, { Component } from "react";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  addToFavourite as addToFavouriteAction,
  removeFromFavourite as removeFromFavouriteAction,
} from "../cart/cartReducer";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const Favourite = useSelector((state) => state.cart.favourite);

  console.log({ Favourite });
  // Function to increase quantity
  const inCreaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  // Function to decrease item
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  // Function to delete from cart
  const deleteFromCart = (item) => {
    dispatch(removeFromCart(item));
    Alert.alert("Item removed from cart");
  };

  // Function to add to Favourite
  const addToFavourite = (item) => {
    dispatch(addToFavouriteAction(item));
    Alert.alert("Item added to cart");
  };

  return (
    <ScrollView>
      <View style={styles.Container}>
        {cart.map((item) => {
          return (
            <Swipeable
              key={item.id}
              renderRightActions={(progress, dragX) => {
                return (
                  <>
                    <View>
                      <View style={styles.rightAction}>
                        <Animated.Text
                          style={[styles.actionText]}
                          onPress={() => deleteFromCart(item)}
                        >
                          <Image
                            source={require("../assets/icon/delete.png")}
                            style={{ borderWidth: 2 }}
                          />
                        </Animated.Text>
                      </View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <View style={styles.rightAction}>
                        <Animated.Text
                          style={[styles.actionText, { marginRight: 10 }]}
                          onPress={() => addToFavourite(item)}
                        >
                          <Image
                            source={require("../assets/icon/heart2.png")}
                          />
                        </Animated.Text>
                      </View>
                    </View>
                  </>
                );
              }}
            >
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
                      <Text style={styles.cartDetailCount}>
                        {item.quantity}
                      </Text>
                      <Pressable onPress={() => inCreaseQuantity(item)}>
                        <Text style={styles.cartDetailCount}>+</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </Swipeable>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "red",
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
  rightAction: {
    flexDirection: "row",
    flex: 1,
  },
  actionText: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "red",
    padding: 10,
    paddingLeft: 12,
    paddingBottom: 13,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 100,
    height: "auto",
  },
});
