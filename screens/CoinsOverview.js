import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput, StyleSheet } from "react-native";
import { fetchCurrencyList } from "../api/index";
import { find } from "../utils/index";

import Coin from "../components/Coin";

const CoinsOverview = () => {
  const [currency, setCurrency] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchCurrencyList().then((response) => setCurrency(response.data));
  }, []);

  return (
    <View>
      <TextInput
        style={{ height: 40, borderBottomWidth: 1, paddingLeft: 10 }}
        placeholder={"Search..."}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <FlatList
        data={find(currency, input)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Coin coin={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CoinsOverview;
