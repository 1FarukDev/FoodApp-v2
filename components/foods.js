import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import FoodItem from "./foodItem";
import FoodItem from "./FoodItem";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";
import food4 from "../assets/images/plantain.jpg";
import food5 from "../assets/images/rice.jpg";
import food6 from "../assets/images/Vegetable.jpg";
import food7 from "../assets/images/spag.jpg";
import { Link, useRouter } from "expo-router";

// import { Router } from "@react-navigation/native";
const foods = () => {
  const food = [
    {
      key: 0,
      name: "Veggie Tomato Mix",
      price: "N1,200",
      image: food1,
    },
    {
      key: 1,
      name: "Egg and cucumber",
      price: "N1,200",
      image: food2,
    },
    {
      key: 2,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image: food3,
    },
    {
      key: 3,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image: food4,
    },
    {
      key: 4,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image: food5,
    },
    {
      key: 5,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image: food6,
    },
    {
      key: 6,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image: food7,
    },
  ];
  return (
    <View style={styles.foodLst}>
      <FlatList
        data={food}
        // style={styles.foodList}
        renderItem={({ item }) => (
          // <TouchableOpacity onPress={() => handlePress()}>
          <FoodItem item={item} />
          // </TouchableOpacity>
        )}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default foods;

const styles = StyleSheet.create({
  foodList: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "black",
  },
});
