import { StyleSheet,SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
const ProductDetail = ({ name }) => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaView
      style={[
        {
          marginTop: Platform.OS === "android" ? 30 : 0,
          paddingLeft: 30,
          paddingRight: 30,
        },
        styles.container,
      ]}
    >
      <Text>{item.name}</Text>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
