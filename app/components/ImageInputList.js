import React from 'react';
import { View, StyleSheet } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import ImageInput from './forms/ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {

    const ListItem = ({ uri }) => (
        <View key={uri} style={styles.image}>
            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      );
    return (
        <View style={styles.container}>
            <ImageInput style={styles.button} iconColor={"white"} noText={true} onChangeImage={uri => onAddImage(uri)} />
            <MasonryList
                contentContainerStyle={styles.container}
                data={imageUris}
                keyExtractor={(item) => item.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                <ListItem
                    uri={item}
                    key={item}
                />
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
    },
    button: {
        backgroundColor: 'black',
        height: 40,
        marginLeft: 10,
        marginTop: -10,
        width: 160,
    },
    image: {
        alignSelf: 'center',
        marginTop: 8,
    },
});

export default ImageInputList;