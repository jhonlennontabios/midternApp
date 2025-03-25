import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-plus" size={24} color="black" />
        <Text style={styles.username}>Username</Text>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
      </View>
      
      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image source={require("../assets/user.png")} style={styles.avatar} />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1000</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>10000</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      {/* Share Section */}
      <View style={styles.shareSection}>
        <Text style={styles.shareText}>Share a TikTok video</Text>
        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate("createdv")}>
          <Text style={styles.shareButtonText}>Create</Text>
        </TouchableOpacity>
      </View>

         {/* Bottom Navigation */}
              <View style={styles.bottomNav}>
                           <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home") }>
                             <MaterialCommunityIcons name="home" size={28} color="black" />
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("categories") }>
                             <MaterialCommunityIcons name="newspaper" size={28} color="black" />
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Vedio") }>
                             <MaterialCommunityIcons name="play-circle" size={40} color="black" />
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("follow") }>
                             <MaterialCommunityIcons name="message" size={28} color="black" />
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile") }>
                             <MaterialCommunityIcons name="account" size={28} color="black" />
                           </TouchableOpacity>
                         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navButton: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileInfo: {
    alignItems: "center",
    paddingVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ddd",
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  stat: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "gray",
  },
  editProfileButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  shareSection: {
    alignItems: "center",
    paddingVertical: 190,
  },
  shareText: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: "#ff2d55",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shareButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;