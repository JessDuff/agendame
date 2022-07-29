import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from '../config/colors';

function AppTextInput({ icon, ref, onSubmit, width = "80%", ...otherProps }) {
  return (
    <View style={[styles.container]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={colors.black}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.secondary}
        style={[defaultStyles.text, styles.input, { width }]}
        underlineColorAndroid='transparent'
        ref={ref}
        onSubmit={onSubmit}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        paddingTop: 10,
    }
});

export default AppTextInput;
