import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";

// Icons
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../screens/tabbarScreen/HomeScreen";
import SettingScreen from "../screens/tabbarScreen/SettingScreen";
import PickLocation from "../screens/StackScreens/PickLocationScreen";
import LoginScreen from "../screens/InitialScreen/Loging";
import SelectCartScreen from "../screens/StackScreens/selectCarScreen";
import ProfileScreen from "../screens/tabbarScreen/ProfileScreen";

const Tab = createBottomTabNavigator();
const HomeStackScreen = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login" headerMode="none">
        {
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        }
        <AuthStack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackGroup}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Setting"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackGroup = () => {
  return (
    <HomeStackScreen.Navigator>
      <HomeStackScreen.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home Screen",
          headerShown: false,
        }}
      />
      <HomeStackScreen.Screen
        name="PickLocation"
        component={PickLocation}
        options={({ navigation }) => ({
          title: "Schedule your ride",
          headerTitleAlign: "left",
          headerTransparent: true,
          // presentation: "modal",
          headerBackTitleVisible: false,
          // headerBackVisible: false,
          // headerLeft: () => (
          //   <Pressable onPress={() => navigation.goBack()}>
          //     <MaterialIcons
          //       name="arrow-back-ios-new"
          //       size={24}
          //       color="black"
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <HomeStackScreen.Screen
        name="SelectCartScreen"
        component={SelectCartScreen}
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "left ",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </Pressable>
          ),
        })}
      />
    </HomeStackScreen.Navigator>
  );
};
export default AppNavigator;
