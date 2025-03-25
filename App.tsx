import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import logo from "./screens/Logo";
import ProfileScreen from "./screens/ProfileScreen";
import CreateVedios from "./screens/createVedios";
import HomeScreen from "./screens/home";
import categories from "./screens/categories";
import followinglist from "./screens/followeruser";
import Playvedio from "./screens/playvedio";
import TransactionScreen from "./screens/transaction";

// Define Stack Navigator
export type RootStackParamList = {
  logo: undefined;
  Profile: undefined;
  createdv: undefined;
  Home: undefined;
  categories: undefined;
  follow: undefined;
  Vedio: undefined;
  Transaction: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="logo" component={logo} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="createdv" component={CreateVedios} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="categories" component={categories} />
        <Stack.Screen name="follow" component={followinglist} />
        <Stack.Screen name="Vedio" component={Playvedio} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
