import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import Coin from "./components/Coin";
import axios from "axios";

const App = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios.get("https://rest.coinapi.io/v1/exchanges").then((response) => setCurrency(response.data));
  }, []);

  return (
    <View style={styles.container}>
      <Header title={"CryptoTracker"} />
      <FlatList data={currency} renderItem={({ item }) => <Coin key={item["exhange_id"]} coin={item} />} />
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
