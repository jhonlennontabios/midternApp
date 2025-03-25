import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput, FlatList } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ExploreScreen = ({ navigation }) => {
  const categories = [
    { id: "1", name: "#Trending", image: "https://via.placeholder.com/100" },
    { id: "2", name: "#Music", image: "https://via.placeholder.com/100" },
    { id: "3", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "4", name: "#Gaming", image: "https://via.placeholder.com/100" },
    { id: "5", name: "#Fashion", image: "https://via.placeholder.com/100" }
  ];
  const trending = [
    { id: "1", name: "#Trending", image: "https://via.placeholder.com/100" },
    { id: "2", name: "#Trending", image: "https://via.placeholder.com/100" },
    { id: "3", name: "#Trending", image: "https://via.placeholder.com/100" },
    { id: "4", name: "#Trending", image: "https://via.placeholder.com/100" }
  ];
  
  const music = [
    { id: "1", name: "#Music", image: "https://via.placeholder.com/100" },
    { id: "2", name: "#Music", image: "https://via.placeholder.com/100" },
    { id: "3", name: "#Music", image: "https://via.placeholder.com/100" },
    { id: "4", name: "#Music", image: "https://via.placeholder.com/100" },
    { id: "5", name: "#Music", image: "https://via.placeholder.com/100" }
  ];
  
  const sports = [
    { id: "1", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "2", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "3", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "4", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "5", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "6", name: "#Sports", image: "https://via.placeholder.com/100" },
    { id: "7", name: "#Sports", image: "https://via.placeholder.com/100" }
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <MaterialCommunityIcons name="magnify" size={24} color="gray" />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItemlist}>
         
            <Text style={styles.username}>{item.name}</Text>
          </View>
        )}
      />
      {/* Trending Section */}
      <Text style={styles.sectionTitle}>Trending</Text>
      <FlatList
        data={trending}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image style={styles.categoryImage} source={{ uri: item.image }} />
            <Text style={styles.username}>{item.name}</Text>
          </View>
        )}
      />
      
      {/* Music Section */}
      <Text style={styles.sectionTitle}>Music</Text>
      <FlatList
        data={music}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image style={styles.categoryImage} source={{ uri: item.image }} />
            <Text style={styles.username}>{item.name}</Text>
          </View>
        )}
      />
      
      {/* Sports Section */}
      <Text style={styles.sectionTitle}>Sports</Text>
      <FlatList
        data={sports}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image style={styles.categoryImage} source={{ uri: item.image }} />
            <Text style={styles.username}>{item.name}</Text>
          </View>
        )}
      />
      
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f0f0f0",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  categoryItemlist: {
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
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

export default ExploreScreen;