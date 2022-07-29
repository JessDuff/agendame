import React from 'react';
import { Text, View, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import shade from '../../assets/images/shade.png'

const ArtistItem = ({onFinish, item}) => {

    const navigation = useNavigation(); 
    const { width } = useWindowDimensions();

    function onPress() {
        storeData(item.id);
        navigation.navigate('Services');
        if (onFinish) onFinish();
      }
      
      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@artistPic_key', value);
        } catch (e) {}
      }
   
    return (
    <TouchableOpacity onPress={ onPress } style={[styles.container, { width }]}>
            <Image style={styles.artistPic} source={item.photo} />
            <Image style={styles.shade} source={shade} />
            <Text style={styles.artistName}>{item.name}</Text>
            <Text style={styles.artistName}>{item.lastname}</Text>
            <View style={styles.artistPhone}>
                <FontAwesome name="phone" size={20} color="white" />
                <Text style={styles.phoneNumber}>{item.phone}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    artistPic: {
        alignSelf: 'center',
        borderRadius: 100,
        height: 180,
        marginBottom: 50,
        marginTop: 30,
        width: 180,
    },
    shade: {
        alignSelf: 'center',
        marginBottom: 30,
        resizeMode: 'contain',
        width: 154,
    },
    artistName: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: 'Cabin',
        fontSize: 30,
        lineHeight: 35,
    },
    artistPhone: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 7,
    },
    phoneNumber: {
        color: '#fff',
        fontFamily: 'Cabin',
        fontSize: 16,
        marginLeft: 10,
    },
});

export default ArtistItem;