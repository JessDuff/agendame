import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default ArtistsNextButton = ({ scrollTo }) => {
    return (
        <TouchableOpacity onPress={scrollTo} style={styles.rightButton}>
            <Entypo name="chevron-small-right" size={40} color="white" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    rightButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
        height: 160,
        justifyContent: 'center',
        paddingLeft: 20,
        position: 'absolute',
        right: -95,
        top: 50,
        width: 160,
    }
});