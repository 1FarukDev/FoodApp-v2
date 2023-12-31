import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import EmptyCart from "../components/emptyCart";
import CartItem from "../components/cartItem";

const CartPage = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const onPress = () => {
    navigation.navigate("Details");
  };
  const cart = useSelector((state) => state.cart.cart);
  return (
    <View
      style={[
        {
          marginTop: Platform.OS === "android" ? 30 : 0,
          // paddingLeft: 30,
          // paddingRight: 30,
          flex: 1,
        },
        styles.container,
      ]}
    >
      {/*  Icons and Word */}
      <View style={styles.icon}>
        <Pressable onPress={handleBack}>
          <Image source={require("../assets/icon/back.png")} />
        </Pressable>
        <Text style={styles.orderText}>Orders</Text>
      </View>

      {/* Cart Page entry */}

      {cart.length === 0 ? (
        <EmptyCart
          imageSource={require("../assets/icon/empty.png")}
          title="No orders yet"
          description={`Hit the orange button down ${"\n"} below to Create an order`}
          buttonText="Start ordering"
        />
      ) : (
        <CartItem />
      )}
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  icon: {
    width: "50%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
  },
  orderText: {
    fontWeight: "400",
    fontSize: 20,
  },
});
