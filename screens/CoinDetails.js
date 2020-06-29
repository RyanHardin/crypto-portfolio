import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CoinDetails = ({ route }) => {
  const { coin } = route.params;
  return (
    <View style={styles.container}>
      <Text>{coin.FullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoinDetails;
