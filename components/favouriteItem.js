import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Animated,
  Alert,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  addToCart,
  addToFavourite as addToFavouriteAction,
  removeFromFavourite as removeFromFavouriteAction,
} from "../cart/cartReducer";

const FavouriteItem = () => {
  const Favourite = useSelector((state) => state.cart.favourite);
  const dispatch = useDispatch();

  // Function to handlle cart
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    Alert.alert("Item added to cart");
  };

  // Function to delete from favourite
  const removeFromFavourite = (item) => {
    dispatch(removeFromFavouriteAction(item));
    Alert.alert("Item removed from favourite");
  };

  return (
    <ScrollView>
      <View style={styles.Container}>
        {Favourite.map((item) => {
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
                          //   onPress={() => deleteFromFavourite(item)}
                          onPress={() => removeFromFavourite(item)}
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
                          onPress={() => addItemToCart(item)}
                        >
                          <Image
                            source={require("../assets/icon/shopping-cart.png")}
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

export default FavouriteItem;

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
