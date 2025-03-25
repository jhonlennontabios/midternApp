import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <Text style={styles.navTitle}>All Activity</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Activity List */}
      <ScrollView style={styles.activityList}>
        {[...Array(10)].map((_, index) => (
          <View key={index} style={styles.activityItem}>
            <Image style={styles.avatar} source={require("../assets/OIP.png")} />
            <View style={styles.activityText}>
              <Text style={styles.username}>CrazyFrog</Text>
              <Text style={styles.description}>started following you</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow back</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
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
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activityList: {
    flex: 1,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  activityText: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  followButton: {
    backgroundColor: "#ff2d55",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  followText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
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
});

export default ActivityScreen;