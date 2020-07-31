import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import colours from "../config/colours";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subtitle} numberOfLines={2}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colours.white,
    marginBottom: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    marginBottom: 7,
  },

  subtitle: {
    color: colours.secondary,
    fontWeight: "bold",
  },
});
