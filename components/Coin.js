import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Coin = ({ coin }) => {
  return (
    <TouchableOpacity style={{ margin: 10 }}>
      <Text>{coin.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Coin;
