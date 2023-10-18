import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  function handleInputChange(name, value) {
    setSignIn((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  async function signInUser() {
    const { error } = await supabase.auth.signInWithPassword({
      email: signIn.email,
      password: signIn.password,
    });

    if (error) {
      Alert.alert(error.message);
      // setLoading(false)
    } else {
      console.log("User signed up:", signIn.email);
      router.replace("home");
      // You can navigate to another screen or perform other actions upon successful sign-up
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
              value={signIn.email}
              onChangeText={(value) => handleInputChange("email", value)}
              placeholder="testing@gmail.com"
            />
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ color: "gray", paddingVertical: 6 }}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={signIn.password}
              onChangeText={(value) => handleInputChange("password", value)}
              placeholder="*******"
            />
          </View>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={(e) => signInUser(e)}>
          Login
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

export default Login;
