import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import Text from './admincomps/AdminText';

function ArtistAddedItem({ item }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={item.photo} />
            <View>
                <Text>{item.name} {item.lastname}</Text>
                <View style={styles.time}>
                    <MaterialCommunityIcons name="clock-time-four-outline" color={colors.black} size={25} />
                    <Text style={styles.timeText}>{item.availability}</Text>
                </View>
            </View>
            <MaterialCommunityIcons name="arrow-right" color={colors.secondary} size={40} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        paddingVertical: 10,
    },
    image: {
        borderRadius: 35,
        height: 70,
        width: 70,
    },
    time: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    timeText: {
        marginLeft: 5,
    }
});

export default ArtistAddedItem;