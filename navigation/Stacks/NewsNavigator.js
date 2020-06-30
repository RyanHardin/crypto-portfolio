import "react-native-gesture-handler";
import React from "react";

import News from "../../screens/News";
import { createStackNavigator } from "@react-navigation/stack";

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

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={News} options={config} />
    </Stack.Navigator>
  );
}
export default NewsStack;
