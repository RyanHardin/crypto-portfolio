import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Search = ({ value, setInput }) => {
  return (
    <TextInput
      style={{ height: 40, borderBottomWidth: 1 }}
      placeholder={"Search..."}
      onChangeText={(text) => setInput(text)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({});

export default Search;
