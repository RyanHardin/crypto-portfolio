import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import CoinsOverview from "./screens/CoinsOverview";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"CryptoTracker"} />
      <CoinsOverview />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
});

export default App;
