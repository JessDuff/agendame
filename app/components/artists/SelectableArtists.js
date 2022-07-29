import React, { useState, useRef } from 'react';
import { View, FlatList, Animated } from 'react-native';

import data from '../../assets/data/artistsData';
import ArtistItem from './ArtistItem';
import ArtistsNextButton from './ArtistsNextButton';
import ArtistsPrevButton from './ArtistsPrevButton';


const SelectableArtists = ({onFinish}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollRight = () => {
        if (currentIndex < data.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1});
        }
    };
    const scrollLeft = () => {
        if (currentIndex != 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1});
        }
    };

    return (
        <View>
            <ArtistsPrevButton scrollTo={scrollLeft} />
            <View style={{ flex: 3 }}>
                <FlatList 
                    data={data}
                    renderItem={({ item }) => <ArtistItem item={item} onFinish={onFinish} />}
                    horizontal
                    pagingEnabled
                    bounces={false} 
                    keyExtractor={(item) => item.id}  
                    extraData={(item) => selectedId} 
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <ArtistsNextButton scrollTo={scrollRight} />
        </View>
    )
}

export default SelectableArtists;