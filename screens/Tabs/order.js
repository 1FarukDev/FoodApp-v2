import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
const Order = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View>
      <Text>Select an option:</Text>
      <RadioButton.Group
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton.Android value="option1" />
          <Text>Option 1</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton.Android value="option2" />
          <Text>Option 2</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton.Android value="option3" />
          <Text>Option 3</Text>
        </View>
      </RadioButton.Group>
      <Text>Selected value: {selectedValue}</Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
