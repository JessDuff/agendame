import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";

import colors from '../../config/colors';
import Text from './AdminText';

function Header({ backgroundColor= "white", onPress}) {
    return (
        <View style={[styles.container, {backgroundColor: colors[backgroundColor]}]}>
            <Entypo onPress={onPress} style={styles.arrow} color={colors.black} name="chevron-left" size={35} />
            <Text style={styles.title}>Agendame</Text>
            <SimpleLineIcons color={colors.black} name="options" size={35} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 18,
    },
    title: {
        fontSize: 25,
    }
});

export default Header;