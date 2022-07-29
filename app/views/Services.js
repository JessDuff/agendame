import React, { Component} from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, Feather } from '@expo/vector-icons';

import data from '../assets/data/servicesData';
import Screen from '../components/Screen';



const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.service, backgroundColor]}>
        <Text style={[styles.serviceName, textColor]}>{item.service}</Text>
        <Image style={styles.icon} source={item.icon}/>
        <View style={styles.info}>
            <Feather name="clock" size={20} color="#4D4D4D" />
            <Text style={[styles.time, textColor]}>{item.time} Hora</Text>
            <Text style={[styles.price, textColor]}>{item.price} Bs.</Text>
        </View>
    </TouchableOpacity>
);
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: data,
        }
    }

    componentDidMount() {
        let arr = this.state.data.map((item, index)=>{
            item.isSelected = false
            return{...item};
        });
        this.setState({data: arr});
    }
    goToLoad = () => {
        this.setState({isLoading: true});
    }
    selectionHandler= (ind)=> {
        const {data} = this.state;
        let arr = data.map((item, index)=>{
            if (ind === index) {
                item.isSelected = !item.isSelected;
            }
            return {...item}
        });
        
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('@services_key', JSON.stringify(arr));
            } catch (e) {}
        }
        storeData();
        this.setState({data: arr});
    }
    render() {
        const {isLoading, data} = this.state;
        const numColumns = 2;
    
        const renderItem = ({ item, index }) => {
            const backgroundColor = item.isSelected ? "#d9d4d4" : "#F5F5F5";
            const color = item.isSelected ? '#7a7a7a' : '#000';
        
            return (
                <Item
                    item={item}
                    onPress={() => this.selectionHandler(index)}
                    backgroundColor={{ backgroundColor }}
                    textColor={{ color }}
                />
            );
        };
  
        return (
            <Screen>
                <View style={styles.header}>
                    <Entypo onPress={() => this.props.navigation.navigate('Artists')} style={styles.arrow} name="chevron-left" size={35} color="black" />
                    <Text onPress={() => this.props.navigation.navigate('Reservation', {selServices: data})} style={styles.done}>Listo</Text>
                </View>
                
                <FlatList
                    contentContainerStyle={styles.servicesContainer}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                />
            </Screen>
        );
    };
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 15,
    },
    done: {
        fontFamily: 'Cabin',
        fontSize: 18,
        marginRight: 5,
    },
    servicesContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
    },
    service: {
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        height: 180,
        justifyContent: 'center',

        marginHorizontal: 10,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.52,
        shadowRadius: 4.22,
        width: 150,
    },
    serviceName: {
        fontFamily: 'ReemKufi',
        fontSize: 18,
    },
    icon: {
        height: 60,
        marginVertical: 20,
        width: 60
    },
    info: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    time: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: 'ReemKufi',
        fontSize: 18,
        marginHorizontal: 5,
    },
    price: {
        fontFamily: 'ReemKufi',
        fontSize: 18,
        marginLeft: 10,
    },
});

export default Services;
