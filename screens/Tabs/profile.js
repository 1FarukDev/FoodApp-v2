import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

const Profile = () => {
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
            
          </View>
        </View>
      </View>
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
  paymentOption: {
    marginTop: 29,
  },
});
