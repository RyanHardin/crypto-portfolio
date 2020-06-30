import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchStack from "./Stacks/SearchNavigator";
import CoinStack from "./Stacks/CoinNavigator";
import NewsStack from "./Stacks/NewsNavigator";

const Tab = createBottomTabNavigator();

const config = {
  headerStyle: {
    backgroundColor: "#04395E",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={CoinStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="News" component={NewsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
