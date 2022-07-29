import React from 'react';
import { Text, StyleSheet } from 'react-native';
import SelectableArtists from '../components/artists/SelectableArtists';
import { useNavigation } from '@react-navigation/native';

import GoBackIcon from '../components/GoBackIcon';
import Screen from '../components/Screen';
import colors from '../config/colors';

const Artists = ({onFinish}) => {
    const navigation = useNavigation(); 
    
    return (
        <Screen style={styles.container}>
            <GoBackIcon onPress={() => navigation.navigate('Time')} color={colors.white} />
            <Text style={styles.title}>Elige a tu artista</Text>
            <SelectableArtists onFinish={onFinish} />
        </Screen>
        
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        flex: 1,
    },
    title: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: 'Cabin',
        fontSize: 36,
    },
});


export default Artists;