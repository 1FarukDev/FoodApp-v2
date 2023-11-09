// import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// const EmptyCart = () => {
//   const navigation = useNavigation();

//   //   Take user back to oder screen
//   const handleStartOrdering = () => {
//     navigation.navigate("Details");
//   };
//   return (
//     <View style={styles.Container}>
//       <View style={styles.cartImage}>
//         <Image source={require("../assets/icon/empty.png")} />
//       </View>
//       <Text style={styles.noOrderText}>No orders yet</Text>
//       <Text style={styles.suggestionText}>
//         Hit the orange button down {"\n"} below to Create an order
//       </Text>
//       <Pressable style={styles.buttonWrapper} onPress={handleStartOrdering}>
//         <Text style={styles.buttonText}>Start odering</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default EmptyCart;

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     alignItems: "center",
//     alignContent: "center",
//     textAlign: "center",
//     justifyContent: "center",
//   },
//   cartImage: {
//     flex: 0.8,
//     justifyContent: "flex-end",
//     alignContent: "flex-end",
//   },
//   noOrderText: {
//     fontWeight: "400",
//     fontSize: 35,
//     textAlign: "center",
//     marginTop: 20,
//   },
//   suggestionText: {
//     fontSize: 20,
//     textAlign: "center",
//     color: "gray",
//     fontWeight: "300",
//     marginTop: 10,
//   },
//   buttonWrapper: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignContent: "flex-end",
//     paddingBottom: 50,
//   },
//   buttonText: {
//     backgroundColor: "#FA4A0C",
//     paddingVertical: 20,
//     paddingHorizontal: 100,
//     borderRadius: 100,
//     color: "#F6F6F9",
//     fontSize: 16,
//   },
// });

import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./button";
const EmptyState = ({ imageSource, title, description, buttonText }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.button}>
        <Button buttonText={buttonText} onPress={onPress} />
        {/* <Text>Hello</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 0.8,
    // marginTop: 100,
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  title: {
    fontWeight: "400",
    fontSize: 35,
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
    fontWeight: "300",
    marginTop: 10,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingBottom: 50,
  },
  buttonText: {
    backgroundColor: "#FA4A0C",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 100,
    color: "#F6F6F9",
    fontSize: 16,
  },
});

export default EmptyState;
