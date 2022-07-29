import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default ArtistsNextButton = ({ scrollTo }) => {
    return (
        <TouchableOpacity onPress={scrollTo} style={styles.leftButton}>
            <Entypo name="chevron-small-left" size={40} color="white" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    leftButton: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
        height: 160,
        justifyContent: 'center',
        left: -95,
        paddingRight: 20,
        position: 'absolute',
        top: 50,
        width: 160,
        zIndex: 10,
    },
});