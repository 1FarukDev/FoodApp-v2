import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
const Profile = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "400", fontSize: 30 }}>
          My Profile
        </Text>
        <Text style={{ marginTop: 40, fontWeight: "600", fontSize: 20 }}>
          Information
        </Text>

        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View style={styles.profileSub}>
            <Image source={require("../../assets/images/profilePicture.png")} />
            <View style={styles.profileText}>
              <Text>Faruk Ajibade</Text>
              <Text style={{ color: "gray", marginTop: 4 }}>
                ajibadefarukyoungprof02@gmail.com
              </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ color: "gray", marginTop: 4 }}
              >
                No 15 uti street off ovie palace road effurun delta state
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Option */}
        <View style={[styles.paymentOption]}>
          <Text style={{ marginTop: 40, fontWeight: "600", fontSize: 20 }}>
            Payment Option
          </Text>
          <View style={[styles.paymentCard]}>
            <View>
              <RadioButton.Group
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
              >
                {/* Credit card */}
                <View style={styles.paymentContainer}>
                  <RadioButton.Android value="option1" color="#FA4A0C" />
                  <View style={styles.paymentTypeContainer}>
                    <View style={styles.paymentImageType}>
                      <Image
                        source={require("../../assets/images/credit-card.png")}
                      />
                    </View>
                    <Text style={styles.paymentTypeText}>Card</Text>
                  </View>
                </View>

                {/* Bank Transfer */}
                <View style={styles.paymentContainer}>
                  <RadioButton.Android value="option2" color="#FA4A0C" />
                  <View style={styles.paymentTypeContainer}>
                    <View
                      style={[
                        styles.paymentImageType,
                        { backgroundColor: "rgba(235, 71, 150, 1)" },
                      ]}
                    >
                      <Image source={require("../../assets/images/bank.png")} />
                    </View>
                    <Text style={styles.paymentTypeText}>Bank Account</Text>
                  </View>
                </View>

                {/* Paypal */}
                <View style={[styles.paymentContainer, { marginBottom: 20 }]}>
                  <RadioButton.Android value="option3" color="#FA4A0C" />
                  <View style={styles.paymentTypeContainer}>
                    <View
                      style={[
                        styles.paymentImageType,
                        {
                          backgroundColor: "#0038FF",
                        },
                      ]}
                    >
                      <Image
                        source={require("../../assets/images/paypal.png")}
                      />
                    </View>
                    <Text style={styles.paymentTypeText}>Paypal</Text>
                  </View>
                </View>
              </RadioButton.Group>
              {/* <Text>Selected value: {selectedValue}</Text> */}
            </View>
          </View>
        </View>
      </View>

      {/* Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  profileCard: {
    backgroundColor: "#fff",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  profileSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: 10,
  },
  profileText: {
    flex: 1, // Allow text to wrap
    marginLeft: 20, // Adjust spacing between image and text
  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  paymentOption: {
    marginTop: 29,
  },
  paymentCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  paymentTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentImageType: {
    backgroundColor: "rgba(244, 123, 10, 1)",
    padding: 10,
    borderRadius: 10,
  },
  paymentTypeText: {
    marginLeft: 10,
  },
  button: {
    flex: 0.5,
    position: "relative",
    marginTop: 200,
  },
  buttonText: {
    position: "absolute",
    bottom: 40,
    justifyContent: "center",
    left: "15%",
    backgroundColor: "#FA4A0C",
    paddingVertical: 20,
    paddingHorizontal: 100,
    fontSize: 16,
    fontWeight: "600",
    color: "#F6F6F9",
    borderRadius: 100,
  },
});
