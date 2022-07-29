import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import Text from '../components/admincomps/AdminText';
import Header from '../components/admincomps/Header';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ArtistsAddedList from '../components/ArtistsAddedList';

function ArtistsAdded(props) {
    const navigation = useNavigation(); 
    return (
        <Screen style={styles.container}>
            <Header onPress={() => navigation.navigate('Add')} />
            <TouchableOpacity onPress={() => navigation.navigate('AddArtist')} style={styles.addButton}>
                <MaterialCommunityIcons color={colors.secondary} name="plus" size={25} />
                <Text style={styles.text}>Nuevo Artista</Text>
            </TouchableOpacity>
            <View style={styles.artistsContainer}></View>
            <ArtistsAddedList />
        </Screen>
    );
}
const styles = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    container: {
        backgroundColor: 'transparent'
    },
    artistsContainer: {
        backgroundColor: colors.white,
    },
    text: {
        color: colors.secondary,
        marginRight: 10,
    }
});

export default ArtistsAdded;