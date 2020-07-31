import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import colours from "../config/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colours.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
