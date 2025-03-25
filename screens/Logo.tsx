import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home"); // Replace "Home" with your actual home screen name
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/tiktok-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>TikTok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default SplashScreen;
