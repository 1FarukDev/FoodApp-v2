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
import { supabase } from "../lib/supabase";

export default SignUp = () => {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    user: "",
  });
  console.log({ signUp });
  function handleChange(name, value) {
    setSignUp((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  async function signUpUser() {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: signUp.email,
        password: signUp.password,
        user: signUp.user,
      });

      if (error) {
        console.error("Sign-up error:", error);
      } else {
        console.log("User signed up:", signUp.user);
        // You can navigate to another screen or perform other actions upon successful sign-up
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View
          style={{
            flex: 1,
            alignContent: "center",
            alignItems: "center",

            marginTop: "10%",
          }}
        >
          <View style={{ width: "90%", marginTop: "5%" }}>
            <Text style={{ color: "gray", paddingVertical: 6 }}>
              Email Address
            </Text>
            <TextInput
              style={styles.input}
              value={signUp.email}
              onChangeText={(value) => handleChange("email", value)}
              name="email"
              placeholder="testing@gmail.com"
            />
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ color: "gray", paddingVertical: 6 }}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              name="password"
              value={signUp.password}
              onChangeText={(value) => handleChange("password", value)}
              placeholder="*******"
            />
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ color: "gray", paddingVertical: 6 }}>Name</Text>
            <TextInput
              style={styles.input}
              // secureTextEntry={true}
              name="user"
              value={signUp.user}
              onChangeText={(value) => handleChange("user", value)}
              placeholder="Enter Name"
            />
          </View>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={(e) => signUpUser(e)}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  firstContainer: {
    flex: 2,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  secondContainer: {
    flex: 2,
    backgroundColor: "#F2F2F2",
  },
  input: {
    width: "90%",
    borderBottomColor: "black", // Change the border bottom color here
    borderBottomWidth: 1,
    height: "30%",
    paddingBottom: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    letterSpacing: 0.25,
    backgroundColor: "#FA4A0C",
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 100,
    color: "#F6F6F9",
  },
});
