import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function HomeArtistItem({ item }) {
    return (
        <View style={styles.artist}>
            <Image style={styles.artistPhoto} source={item.photo}/>
            <Text style={styles.artistName}>{item.name}</Text>
            <Text style={styles.artistName}>{item.lastname}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    artist: {
        alignItems: 'center',
        marginHorizontal: 10,
      },
      artistPhoto: {
        borderRadius: 100,
        height: 90,
        width: 90
      },
      artistName: {
        fontFamily: 'Cabin',
        fontSize: 18,
      },
})

export default HomeArtistItem;