import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CoinsOverview from "../screens/CoinsOverview";

const Stack = createStackNavigator();
const config = {
  title: "Overview",
  headerStyle: {
    backgroundColor: "#04395E",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function CoinStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CoinsOverview} options={config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default CoinStack;
