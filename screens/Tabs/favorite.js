import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import EmptyState from "../../components/emptyCart";
// import EmptyCart from "../components/emptyCart";
// import CartItem from "../components/cartItem";
import CartItem from "../../components/cartItem";
const Favourite = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const favourite = useSelector((state) => state.cart.favourite);
  return (
    <View
      style={[
        {
          marginTop: Platform.OS === "android" ? 30 : 0,
          flex: 1,
        },
        styles.container,
      ]}
    >
      {/*  Icons and Word */}
      <View style={{}}>
        <Text style={[styles.orderText, { textAlign: "center" }]}>
          Favourite
        </Text>
      </View>

      {/* Cart Page entry */}

      {favourite.length === 0 ? (
        <EmptyState
          // imageSource={require("../assets/icon/empty.png")}
          title="No favourite yet"
          description={`Click on the love button on each ${"\n"} detail page to add favourite`}
        />
      ) : (
        <CartItem />
      )}
    </View>
  );
};

export default Favourite;

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
