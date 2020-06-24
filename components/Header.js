import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#04395E",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Header;
