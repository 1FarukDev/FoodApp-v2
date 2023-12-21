import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: "row", // Align items in a row
          alignItems: "center", // Center items vertically
        }}
        onPress={() => console.log("Hello World")}
      >
        <Text style={{ marginBottom: 2, color: "white", paddingRight: 5 }}>
          Sign-out
        </Text>
        <Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
