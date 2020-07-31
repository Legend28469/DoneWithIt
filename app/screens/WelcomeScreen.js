import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" color="secondary" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },

  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
