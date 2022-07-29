import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import Text from './admincomps/AdminText';


function SecondaryButton({ title, onPress, backgroundColor = "black", color="white" }) {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: colors[backgroundColor]}]} onPress={onPress}>
            <Text style={[{color: colors[color]}]}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: colors.black,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 5,
        marginTop: 20,
        paddingVertical: 7,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 170
    },
});

export default SecondaryButton;