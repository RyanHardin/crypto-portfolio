import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CoinsOverview from "../screens/CoinsOverview";
import CoinDetails from "../screens/CoinDetails";

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

function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Overview" component={CoinsOverview} options={config} />
      <Stack.Screen name="Details" component={CoinDetails} options={config} />
    </Stack.Navigator>
  );
}
export default SearchNavigator;
