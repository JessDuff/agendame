import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AutoDragSortableView from '../widget/AutoDragSortableView';
import { useNavigation } from '@react-navigation/native';

import exampleData from '../assets/data/examplesData';
import Header from '../components/admincomps/Header';
import Screen from '../components/Screen';

const {width} = Dimensions.get('window');
const parentWidth = width;
const childrenWidth = 132;
const childrenHeight = 170;


function SortCounter(props) {
    const [useData, setUseData] = useState(exampleData);
    const navigation = useNavigation();

    const renderItem = (item,index) => {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={item.photo}/>
            </View>
        )
    }
    console.log(useData);
    return (
        <Screen>
            <Header onPress={() => navigation.navigate('Counter')} />
            <View style={styles.container}>
                <AutoDragSortableView
                    style={{alignItems: 'center'}}
                    dataSource={useData}
                    delayLongPress={1}
                    parentWidth={parentWidth}
                    childrenWidth= {childrenWidth}
                    marginChildrenBottom={10}
                    marginChildrenRight={16}
                    marginChildrenLeft = {16}
                    childrenHeight={childrenHeight}
                    onDataChange = {(data)=>{
                        //if (data.length != useData.length) {
                            setUseData(data);
                            //console.log(useData);
                        //}
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={(item,index) => {
                        return renderItem(item,index)
                    }}
                />
            </View>
        </Screen>
    )  
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: "80%"
    },
    image: {
        height: '100%',
        width: '100%',
    },
    item: {
        //alignSelf: 'center',
        borderRadius: 15,
        height: childrenHeight,
        overflow: 'hidden',
        width: childrenWidth,
    },
})

export default SortCounter;