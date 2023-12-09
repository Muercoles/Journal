import { View, Platform } from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../constants/Colors";
import Profile from "../screen/User/profile";
import Schedule from "../screen/User/schedule";
import {Home} from "../screen/Home/Home";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: Colors.white,
  },
};
const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? Colors.main : Colors.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="table"
                size={24}
                color={focused ? Colors.main : Colors.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Create"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.main,
                  height: Platform.OS == "ios" ? 50 : 60,
                  width: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  borderWidth: 2,
                  borderColor: Colors.white,
                }}
              >
                <Fontisto name="check" size={24} color={Colors.white} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={focused ? Colors.main : Colors.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="person-outline"
                size={24}
                color={focused ? Colors.main : Colors.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
