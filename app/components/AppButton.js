import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';


function AppButton({ icon, iconColor="white", title, onPress, backgroundColor = "black", color="white" }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[backgroundColor]}]} onPress={onPress} >
            {title && <Text style={[styles.text,{color: colors[color]}]}>{title}</Text>}
            {icon && <MaterialCommunityIcons name={icon} color={colors[iconColor]} size={40} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
        width: 150,
    },
    text: {
        fontFamily: 'ReemKufi',
        fontSize: 20,
    }
});

export default AppButton;