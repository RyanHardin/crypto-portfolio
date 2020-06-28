import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardItem } from "native-base";

const Coin = ({ coin, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { coin: coin })}>
      <Card style={{ width: 350 }}>
        <CardItem>
          <Image
            style={styles.image}
            source={{ uri: coin.url }}
            resizeMode={"cover"} // cover or contain its upto you view look
          />
          <Text style={styles.name}>{coin.name}</Text>
          <Text>{coin.asset_id}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },

  name: { margin: 10, fontWeight: "700" },
});

export default Coin;
