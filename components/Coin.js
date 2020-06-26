import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardItem } from "native-base";

const Coin = ({ coin }) => {
  return (
    <TouchableOpacity>
      <Card style={{ width: 350 }}>
        <CardItem>
          <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: coin.url }}
            resizeMode={"cover"} // cover or contain its upto you view look
          />
          <Text style={{ margin: 10 }}>{coin.name}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Coin;
