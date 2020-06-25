import React from "react";
import { StyleSheet, View } from "react-native";
import CoinStack from "./navigation/CoinTrackerNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <CoinStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
