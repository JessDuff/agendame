import React from 'react';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function GoBackIcon({ onPress, color = "#000" }) {
    return (
        <Entypo onPress={onPress} style={styles.arrow} name="chevron-left" size={35} color={color} />
    );
}
const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginTop: 15
    },
});

export default GoBackIcon;