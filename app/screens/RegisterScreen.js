import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppTextInput icon="account" placeholder="Name" />
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="lock" placeholder="Password" secureTextEntry />
      <AppButton title="Register" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
