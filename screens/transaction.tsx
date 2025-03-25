import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const TransactionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <LinearGradient colors={["#0B829E", "#0B829E"]} style={styles.header}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.headerText}>Transaction</Text>
            </View>
            </LinearGradient>
      
      {/* Transaction Section */}
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Transaction id..." style={styles.searchInput} />
          <TouchableOpacity>
            <MaterialCommunityIcons name="magnify" size={24} color="#0B829E" />
          </TouchableOpacity>
        </View>
        
        {/* Transaction List */}
        <View style={styles.transactionList}>
          {transactions.map((transaction, index) => (
            <View key={index} style={styles.transactionItem}>
              <Text style={styles.amount}>${transaction.amount}</Text>
              <Text style={[styles.paymentStatus, { backgroundColor: transaction.statusColor }]}>
                {transaction.status}
              </Text>
              <Text style={styles.method}>{transaction.method}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const transactions = [
  { amount: "9.99", status: "Complete", statusColor: "#2CA58D", method: "INSTAMOJO" },
  { amount: "72.78", status: "Complete", statusColor: "#2CA58D", method: "COD" },
  { amount: "42.46", status: "Pending", statusColor: "#F4A261", method: "COD" },
  { amount: "49.60", status: "Pending", statusColor: "#F4A261", method: "COD" },
  { amount: "41.64", status: "Pending", statusColor: "#F4A261", method: "COD" },
  { amount: "43.46", status: "Complete", statusColor: "#2CA58D", method: "COD" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#E8F1F2"
 },
 header: { height: 120, justifyContent: "center", paddingHorizontal: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
 headerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
 headerIcons: { flexDirection: "row" },
 headerText: {
   color: "#fff",
   fontSize: 19,
   fontWeight: "bold",
   marginLeft: 10,
   flexDirection: "row",
   textAlign:'center',
  
   width:'100%',
 },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsIcon: {
    marginLeft: 15,
  },
  transactionContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  transactionList: {
    marginTop: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
  },
  paymentStatus: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  method: {
    color: "#666",
  },
});

export default TransactionScreen;
