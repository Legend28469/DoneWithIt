import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colours from "../config/colours";

export default function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colours.light,
  },
});
