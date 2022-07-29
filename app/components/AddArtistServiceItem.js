import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import Text from './admincomps/AdminText';
 

function AddArtistServiceItem({ item, onPress, backgroundColor }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <View style={[styles.service, backgroundColor]}>
                <Image style={styles.icon} source={item.icon} />
            </View>
            <Text>{item.service}</Text>
            <Text style={styles.time}>{item.time} hora</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 18,
        marginTop: 10,
        width: 70,
    },
    icon: {
        height: 40,
        margin: 0,
        width: 40,
    },
    service: {
        alignItems: 'center',
        borderRadius: 50,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
    time: {
        color: colors.secondary,
        fontSize: 14,
    },
});

export default AddArtistServiceItem;