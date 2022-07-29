import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import data from '../assets/data/artistsData';
import HomeArtistItem from '../components/HomeArtistItem';

function HomeArtistsList(props) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <HomeArtistItem item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            scrollEnable
            snapToAlignment = 'center'
            scrollEventThrottle = {16}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginHorizontal: 10,
    }
});

export default HomeArtistsList;