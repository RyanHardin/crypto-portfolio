import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import CoinStack from "./navigation/CoinNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
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
