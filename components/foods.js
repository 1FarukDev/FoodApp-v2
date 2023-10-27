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
// import FoodItem from "./FoodItem";
// import food1 from "../assets/images/food1.png";
// import food2 from "../assets/images/food2.png";
// import food3 from "../assets/images/food3.png";
// import food4 from "../assets/images/plantain.jpg";
// import food5 from "../assets/images/rice.jpg";
// import food6 from "../assets/images/Vegetable.jpg";
// import food7 from "../assets/images/spag.jpg";
import FoodItem from "./FoodItem";
import {
  foodImage1,
  foodImage2,
  foodImage3,
  foodImage4,
  foodImage5,
  foodImage6,
  foodImage7,
} from "./assets";
import { Link, useRouter } from "expo-router";

// import { Router } from "@react-navigation/native";
const foods = () => {
  const food = [
    {
      id: 0,
      name: "Veggie Tomato Mix",
      price: "N1,200",
      image:   foodImage1,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
    {
      id: 1,
      name: "Egg and cucumber",
      price: "N1,200",
      image:   foodImage2,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
    {
      id: 2,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image:   foodImage3,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
    {
      id: 3,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image:   foodImage4,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
    {
      id: 4,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image:   foodImage5,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
    {
      id: 5,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image:   foodImage6,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
    {
      id: 6,
      name: "Moi-moi and ekpa",
      price: "N1,200",
      image:   foodImage7,
      deliveryInfo:
        "Delivered between monday aug and thursday 20 from 8pm to 91:32 pm",
      returnPolicy:
        "All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.",
    },
  ];
  return (
    <View style={styles.foodLst}>
      <FlatList
        data={food}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <FoodItem item={item} />}
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
