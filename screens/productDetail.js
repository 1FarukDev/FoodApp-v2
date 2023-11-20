import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../cart/cartReducer";
// import Click from "../components/button";

//  Function handling the params
const ProductDetail = ({ name }) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  // Function to handle cart
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  // Function to remove from cart
  const deleteFromCart = () => {
    dispatch(removeFromCart(item));
  };
  // Destructuring the route
  const route = useRoute();
  const { item } = route.params;
  console.log(item);
  return (
    <SafeAreaView
      style={[
        {
          marginTop: Platform.OS === "android" ? 30 : 0,
          paddingLeft: 30,
          paddingRight: 30,
          flex: 1,
        },
        styles.container,
      ]}
    >
      {/* Top Icons */}
      <View style={styles.icon}>
        <Pressable onPress={handleBack}>
          <Image source={require("../assets/icon/back.png")} />
        </Pressable>
        <Pressable>
          <Image source={require("../assets/icon/heart.png")} />
        </Pressable>
      </View>

      {/* Image of the product */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      {/* Name of The product */}
      <View style={styles.productDetail}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      {/* Miscellenous info */}
      <View style={styles.miscText}>
        <Text style={[{ marginTop: 20 }, styles.infoText]}>Delivery Info:</Text>
        <Text style={styles.productDeliveryInfo}>{item.deliveryInfo}</Text>
        <Text style={[{ marginTop: 20 }, styles.infoText]}>Return Policy:</Text>
        <Text style={[styles.productDeliveryInfo]}>{item.returnPolicy}</Text>
      </View>

      {/* Button */}
      {cart.some((value) => value.id == item.id) ? (
        <Pressable style={styles.button} onPress={() => deleteFromCart(item)}>
          <Text style={styles.buttonText}>Remove From Cart</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.button} onPress={() => addItemToCart(item)}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  productDetail: {
    marginTop: 10,
    flex: 0.5,
  },
  productName: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
  },
  productPrice: {
    textAlign: "center",
    color: "#FA4A0C",
    fontSize: 25,
    marginTop: 10,
  },
  productDeliveryInfo: {
    color: "grey",
    fontSize: 20,
    width: "90%",
    lineHeight: 30,
  },
  miscText: {
    marginTop: 20,
    width: "90%",
    flex: 1,
  },
  infoText: {
    fontWeight: "500",
    fontSize: 20,
  },
  // button: {
  //   flex: 0.5,
  //   position: "relative",
  // },
  // buttonText: {
  //   position: "absolute",
  //   bottom: 40,
  //   justifyContent: "center",
  //   left: "15%",
  //   backgroundColor: "#FA4A0C",
  //   paddingVertical: 20,
  //   paddingHorizontal: 100,
  //   fontSize: 16,
  //   fontWeight: "600",
  //   color: "#F6F6F9",
  //   borderRadius: 100,
  // },
  button: {
    flex: 1,
    justifyContent: "flex-end", // Align the content at the bottom of its container.
    alignContent: "flex-end", // Align the content at the bottom of its container.
    paddingBottom: 50,
  },
  buttonText: {
    backgroundColor: "#FA4A0C",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 100,
    color: "#F6F6F9",
    fontSize: 16,
    textAlign: "center",
  },
});
