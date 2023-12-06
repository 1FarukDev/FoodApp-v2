import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const DrawerScreenWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 2000 },
        { scale: interpolate(progress.value, [0, 1], [1, 0.8], "clamp") },
        {
          rotateY: `${interpolate(
            progress.value,
            [0, 1],
            [0, -0.2],
            "clamp"
          )}deg`,
        },
        {
          translateX: interpolate(progress.value, [0, 1], [0, 0, -60], "clamp"),
        },
      ],
      borderRadius: 20,
      overflow: "hidden",
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      {children}
    </Animated.View>
  );
};

export default DrawerScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
