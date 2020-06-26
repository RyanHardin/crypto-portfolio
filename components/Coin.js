import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardItem } from "native-base";

const Coin = ({ coin }) => {
  return (
    <TouchableOpacity>
      <Card style={{ width: 350 }}>
        <CardItem>
          <Text>{coin.name}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Coin;
