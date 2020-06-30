import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardItem } from "native-base";

const Coin = ({ coin, navigation }) => {
  const image = `https://www.cryptocompare.com/${coin.ImageUrl}`;
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { coin: coin })}>
      <Card style={{ width: 350 }}>
        <CardItem>
          {
            <Image
              style={styles.image}
              source={{ uri: image }}
              resizeMode={"cover"} // cover or contain its upto you view look
            />
          }
          <Text style={styles.name}>{coin.FullName}</Text>
          <Text>{coin.Symbol}</Text>
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
