import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";
import drink1 from "../assets/images/clovis.jpg";
import drink2 from "../assets/images/edward.jpg";
import drink3 from "../assets/images/greatCocktail.jpg";
import drink4 from "../assets/images/kevinKelly.jpg";
import drink5 from "../assets/images/mangoJuice.jpg";
import drink6 from "../assets/images/pinkIceCream.jpg";
import drink7 from "../assets/images/rodionKutsaiev.jpg";
import drink8 from "../assets/images/sandraSeitamaa.jpg";
import drink9 from "../assets/images/stanisLav.jpg";
const drinks = () => {
  const drink = [
    {
      key: 0,
      name: "Clovis",
      price: "N1,200",
      image: drink1,
    },
    {
      key: 1,
      name: "Edward Champagne",
      price: "N1,200",
      image: drink2,
    },
    {
      key: 2,
      name: "Great Cocktail",
      price: "N1,200",
      image: drink3,
    },
    {
      key: 3,
      name: "Kevin Kelly",
      price: "N1,200",
      image: drink4,
    },
    {
      key: 4,
      name: "Mango Juice",
      price: "N1,200",
      image: drink5,
    },
    {
      key: 5,
      name: "Pink Ice Cream",
      price: "N1,200",
      image: drink6,
    },
    {
      key: 6,
      name: "Rodion Kutsaiev",
      price: "N1,200",
      image: drink7,
    },
  ];
  return (
    <View style={styles.foodList}>
      <FlatList
        data={drink}
        renderItem={({ item }) => <FoodItem item={item} />}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default drinks;

const styles = StyleSheet.create({
  foodList: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    // backgroundColor: "black",
  },
});
