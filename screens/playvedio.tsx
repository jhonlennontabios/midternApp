import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Video from "react-native-video";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const VideoScreen = () => {
  const navigation = useNavigation();
  const videoRef = useRef(null); // Video reference
  const [isPaused, setIsPaused] = useState(false); // State for play/pause

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (videoRef.current) {
          setIsPaused(true); // Pause video when screen is unfocused
        }
      };
    }, [])
  );

  const togglePlayPause = () => {
    setIsPaused(!isPaused); // Toggle play/pause state
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <Text style={styles.navText}>Trending</Text>
        <Text style={[styles.navText, styles.activeTab]}>For You</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="magnify" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Video Player with Tap-to-Pause & Play */}
      <TouchableOpacity style={styles.videoContainer} onPress={togglePlayPause}>
        <Video
          ref={videoRef} // Assign reference
          source={require("../assets/crazyFrog.mp4")}
          style={styles.video}
          resizeMode="cover"
          controls={false} // Hide default controls
          paused={isPaused} // Play/Pause control
          onError={(error) => console.log("Video Error:", error)} // Debugging
          repeat
        />
      </TouchableOpacity>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>@CrazyFrog</Text>
        <Text style={styles.caption}>Crazy frog Fly High</Text>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="heart" size={32} color="white" />
          <Text style={styles.actionText}>100K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="comment" size={32} color="white" />
          <Text style={styles.actionText}>10K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="bookmark" size={32} color="white" />
          <Text style={styles.actionText}>5K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton1} onPress={() => navigation.navigate("createdv")}>
          <MaterialCommunityIcons name="circle" size={52} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="home" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("categories")}>
          <MaterialCommunityIcons name="newspaper" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Vedio")}>
          <MaterialCommunityIcons name="play-circle" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("follow")}>
          <MaterialCommunityIcons name="message" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile")}>
          <MaterialCommunityIcons name="account" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  topNav: {
    position: "absolute",
    top: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },
  activeTab: {
    color: "white",
    fontWeight: "bold",
  },
  navText: {
    color: "gray",
    fontSize: 16,
  },
  videoContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    position: "absolute",
    bottom: 120,
    left: 20,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  caption: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },
  actionsContainer: {
    position: "absolute",
    bottom: 100,
    right: 20,
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  actionButton1: {
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  actionText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#000",
  },
  navButton: {
    padding: 10,
  },
});

export default VideoScreen;
