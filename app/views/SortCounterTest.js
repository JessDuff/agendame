import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AutoDragSortableView from '../widget/AutoDragSortableView';

import data from '../assets/data/servicesData';
import Header from '../components/admincomps/Header';
import Screen from '../components/Screen';

const {width} = Dimensions.get('window');
const parentWidth = width
const childrenWidth = width/2 - 20
const childrenHeight = 48*4

export default class SortCounter extends Component {
    constructor(props) {
        super();
        this.state = { 
            data: data, 
        }
    }
    
    renderItem(item,index) {
        return (
            <View style={styles.item}>
                <View style={styles.item_icon_swipe}>
                    <Image style={styles.item_icon} source={item.icon}/>
                </View>
                <View style={styles.item_text_swipe}>
                    <Text style={styles.item_text}>{item.id}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <Screen>      
                <AutoDragSortableView
                    dataSource={this.state.data}
                    
                    parentWidth={parentWidth}
                    childrenWidth= {childrenWidth}
                    marginChildrenBottom={10}
                    marginChildrenRight={10}
                    marginChildrenLeft = {10}
                    marginChildrenTop = {10}
                    childrenHeight={childrenHeight}
                    
                    onDataChange = {(data)=>{
                        if (data.length != this.state.data.length) {
                            this.setState({
                                data: data
                            })
                        }
                    }}
                    keyExtractor={(item,index)=> item.id} // FlatList作用一样，优化
                    renderItem={(item,index)=>{
                        return this.renderItem(item,index)
                    }}
                    renderHeaderView = {<Header/>}
                />
            </Screen>
        )
    }


}

const styles = StyleSheet.create({
    item: {
        width: childrenWidth,
        height: childrenHeight,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f39c12',
        borderRadius: 4,
    },
    item_icon_swipe: {
        width: childrenWidth*0.7,
        height: childrenWidth*0.7,
        backgroundColor: '#fff',
        borderRadius: childrenWidth*0.35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_icon: {
        width: childrenWidth*0.5,
        height: childrenWidth*0.5,
        resizeMode: 'contain',
    },
    item_text_swipe: {
        backgroundColor: '#fff',
        width: 56,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_text: {
        color: '#444',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
