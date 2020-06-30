import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CoinDetails from "../../screens/CoinDetails";
import TopCoins from "../../screens/TopCoins";

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
    <Stack.Navigator>
      <Stack.Screen name="Top Coins" component={TopCoins} options={config} />
      <Stack.Screen name="Details" component={CoinDetails} options={config} />
    </Stack.Navigator>
  );
}
export default CoinStack;
