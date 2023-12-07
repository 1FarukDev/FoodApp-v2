import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ navigation }) {
  const handleImagePress = () => {
    navigation.replace("Details");
  };
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image source={require("../assets/images/cover_image.png")} />
      </View>
      <View style={styles.middleLogo}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={require("../assets/images/home_logo.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignContent: "center",
  },
  cover: {
    // flex: 1,
    // position: "relative",
    // alignItems: "center",
    // alignContent: "center",
  },
  middleLogo: {
    position: "absolute",
    left: "25%",
    top: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ffff",
  },
});
export default HomeScreen;
