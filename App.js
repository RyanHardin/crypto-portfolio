import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import TabBarNavigator from "./navigation/TabBarNavigator";
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <TabBarNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
