import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import Header from "./components/Header";
import Coin from "./components/Coin";
import axios from "axios";

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("https://rest.coinapi.io/v1/exchanges").then((response) => setCurrency(response.data));
  }, []);

  const filter = currency.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <View style={styles.container}>
      <Header title={"CryptoTracker"} />
      <TextInput
        style={{ height: 40, borderBottomWidth: 1, paddingLeft: 10 }}
        placeholder={"Search..."}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <FlatList
        data={filter}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Coin coin={item} />}
      />
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
