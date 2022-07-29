import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import data from '../assets/data/artistsData';
import ArtistItem from './ArtistAddedItem';

function ArtistsAddedList(props) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <ArtistItem item={item} />}
            keyExtractor={(item) => item.id}
            scrollEnable
            snapToAlignment = 'center'
            scrollEventThrottle = {16}
        />
    );
}
const styles = StyleSheet.create({
    container: {}
});

export default ArtistsAddedList;