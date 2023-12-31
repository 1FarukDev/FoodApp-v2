import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Foods from "../../components/foods";
import Drinks from "../../components/drinks";
import Sauce from "../../components/sauce";
import Snacks from "../../components/snacks";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import DrawerScreenWrapper from "../../components/DrawerScreenWraper";
const Home = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const navigation = useNavigation();
  const switchComponent = (componentNumber) => {
    setActiveComponent(componentNumber);
  };

  const handleCartPage = () => {
    navigation.navigate("Cart");
  };

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
      {/* Icon */}
      <View style={styles.icon}>
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
          <Image source={require("../../assets/icon/hamburger.png")} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleCartPage}>
          <Image source={require("../../assets/icon/shopping-cart.png")} />
        </TouchableWithoutFeedback>
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Delicious</Text>
        <Text style={styles.text}>food for you</Text>
      </View>

      {/* Search Bar */}

      <View style={styles.inputContainer}>
        <View>
          <Image source={require("../../assets/icon/search.png")} />
        </View>
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      {/* Categories */}

      <View style={styles.categoryContainer}>
        <View
          style={[
            activeComponent === 1 ? styles.authTextWrapper : null,
            styles.categoryTextActive,
          ]}
        >
          <TouchableWithoutFeedback onPress={() => switchComponent(1)}>
            <Text style={styles.categoryText}>Foods</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={activeComponent === 2 && styles.authTextWrapper}>
          <TouchableWithoutFeedback onPress={() => switchComponent(2)}>
            <Text style={styles.categoryText}>Drink</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={activeComponent === 3 && styles.authTextWrapper}>
          <TouchableWithoutFeedback onPress={() => switchComponent(3)}>
            <Text style={styles.categoryText}>Snacks</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={activeComponent === 4 && styles.authTextWrapper}>
          <TouchableWithoutFeedback onPress={() => switchComponent(4)}>
            <Text style={styles.categoryText}>Sauce</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.activeComponent}>
        {activeComponent === 1 && <Foods />}
        {activeComponent === 2 && <Drinks />}
        {activeComponent === 3 && <Snacks />}
        {activeComponent === 4 && <Sauce />}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
  },
  icon: {
    // backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    width: "185px",
    fontSize: 40,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 40,
  },
  inputContainer: {
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    width: "80%",
    marginTop: 20,
    justifyContent: "center",
  },
  input: {
    // backgroundColor: "black",
    // borderWidth: 1,
    paddingLeft: 10,
    width: "90%",
    marginLeft: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  categoryText: {
    color: "#9A9A9D",
    fontSize: 19,
  },
  categoryTextActive: {
    color: "#FA4A0C",
    fontSize: 30,
  },
  authTextWrapper: {
    borderBottomWidth: 2,
    borderColor: "#FA4A0C",
    width: 70,
    paddingBottom: 5,
    alignItems: "center",
  },
  activeComponent: {
    marginTop: 40,
  },
});
