import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "native-base";

import Coin from "../components/Coin";

import { getTopCoins } from "../api/index";

const TopCoins = ({ navigation }) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    getTopCoins().then((res) => setCurrency(res));
  }, []);
  return (
    <View style={styles.container}>
      {currency.length ? (
        <FlatList
          data={currency}
          keyExtractor={(item) => item.Id}
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

export default TopCoins;
