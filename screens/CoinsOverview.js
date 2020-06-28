import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Item, Input, Icon, Text } from "native-base";

import Coin from "../components/Coin";

import { fetchCurrencyList } from "../api/index";
import { find } from "../utils/index";

const CoinsOverview = ({ navigation }) => {
  const [currency, setCurrency] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchCurrencyList().then((res) => setCurrency(res));
  }, []);

  return (
    <View style={styles.container}>
      <Item rounded style={styles.input}>
        <Input placeholder="Search..." onChangeText={(text) => setInput(text)} value={input} />
        <Icon name="ios-search" style={styles.icon} />
      </Item>
      {currency.length ? (
        <FlatList
          data={find(currency, input)}
          keyExtractor={(item) => item.asset_id}
          renderItem={({ item }) => <Coin coin={item} navigation={navigation} />}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  input: { width: 350, borderColor: "black", margin: 10, paddingLeft: 10 },
  icon: { paddingRight: 20 },
});

export default CoinsOverview;
