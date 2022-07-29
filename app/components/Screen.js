import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView style={[styles.view]}>{children}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    view: {
        flex: 1,
    },
});

export default Screen;