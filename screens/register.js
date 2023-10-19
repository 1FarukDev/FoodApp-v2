import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Login from "../components/login";
import SignUp from "../components/signup";

const Register = () => {
  const [page, setPage] = useState(true);
  const handleSwitchSignUp = () => {
    setPage(false);
  };
  const handleSwitchLogin = () => {
    setPage(true);
  };
  if (page) {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageText}>
              <View style={page ? styles.authTextWrapper : ""}>
                <Pressable onPress={handleSwitchLogin}>
                  <Text style={styles.authText}>Login</Text>
                </Pressable>
              </View>
              <View style={!page ? styles.authTextWrapper : ""}>
                <Pressable onPress={handleSwitchSignUp}>
                  <Text style={styles.authText}>Sign-Up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <Login />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageText}>
              <View style={!page ? "" : styles.authTextWrapper}>
                <Pressable onPress={handleSwitchLogin}>
                  <Text style={styles.authText}>Login</Text>
                </Pressable>
              </View>
              <View style={page ? "" : styles.authTextWrapper}>
                <Pressable onPress={handleSwitchSignUp}>
                  <Text style={styles.authText}>Sign-Up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <SignUp />
      </View>
    );
  }

  // <View style={styles.container}>
  //   <Image source={require("../assets/images/logo.png")} />
  // </View
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
  imageContainer: {
    backgroundColor: "#FFFFFF",
    // alignContent: "center",
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTextContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  imageText: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    paddingVertical: 10,
    justifyContent: "space-between",

    width: "60%",
  },
  authText: {
    fontWeight: "600",
    fontSize: 18,
  },
  authTextWrapper: {
    borderBottomWidth: 2,
    borderColor: "black",
    // width: 50,
    paddingBottom: 3,
  },
  // firstContainer: {
  //   flex: 2,
  //   backgroundColor: "#ffff",
  //   justifyContent: "center",
  //   alignContent: "center",
  //   alignItems: "center",
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  // },
  // secondContainer: {
  //   flex: 2,
  //   backgroundColor: "#F2F2F2",
  // },
  // input: {
  //   width: "90%",
  //   borderBottomColor: "black", // Change the border bottom color here
  //   borderBottomWidth: 1,
  //   height: "30%",
  // },
  // button: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignContent: "center",
  //   alignItems: "center",
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   borderRadius: 4,
  // },
  // buttonText: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: "600",
  //   letterSpacing: 0.25,
  //   backgroundColor: "#FA4A0C",
  //   borderRadius: 100,
  //   paddingVertical: 20,
  //   paddingHorizontal: 100,
  //   color: "#F6F6F9",
  // },
});

export default Register;
