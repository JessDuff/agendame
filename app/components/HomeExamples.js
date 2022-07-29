import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

const HomeExamples = ({ displayButton }) => {
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=4&_page=' + offset
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setOffset(offset + 1);
        setDataSource([...dataSource, ...responseJson]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ItemView = ({ item }) => {
    return (
      <Image
        source={{ uri: item.url }}
        key={item.id}
        style={[
          styles.image,
          { height: Math.floor(Math.random() * (250 - 150) + 150) },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <MasonryList
        contentContainerStyle={styles.examples}
        data={dataSource}
        keyExtractor={(item) => item.id.toString() }
        renderItem={ItemView}
        ListFooterComponent={displayButton && 
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={getData}
              style={styles.loadMoreButton}>
              <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
  },
  examples: {
    alignSelf: 'center',
    width: '90%',
  },
  image: {
    alignSelf: 'center',
    marginTop: 5,
    width: 170,
  },
  loadMoreButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    width: 160,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'ReemKufi',
    fontSize: 24,
  },
});

export default HomeExamples;
