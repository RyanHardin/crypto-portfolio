import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CoinsOverview from "../screens/CoinsOverview";
import CoinDetails from "../screens/CoinDetails";
import TopCoins from "../screens/TopCoins";

const Stack = createStackNavigator();
const config = {
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
        <Stack.Screen name="Top" component={TopCoins} options={config} />
        <Stack.Screen name="Details" component={CoinDetails} options={config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default CoinStack;
