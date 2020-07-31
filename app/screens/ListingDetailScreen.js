import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "../components/AppText";
import colours from "../config/colours";
import ListItem from "../components/ListItem";

export default function ListingDetailScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Johnathan"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 10,
  },

  price: {
    color: colours.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },

  userContainer: {
    marginVertical: 40,
  },
});
