import React, { Component, useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LogBox } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import listingsApi from '../api/listings';
import data from '../assets/data/artistsData';
import AppForm from '../components/forms/ReservationForm';
import colors from '../config/colors';
import GoBackIcon from '../components/GoBackIcon';
import Screen from '../components/Screen';


LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);


const Reservation = ({ time, date, services, artist }) =>{
    const serviceData = [];
    const Item = ({item}) => (
        <View style={styles.service}>
            <Image style={styles.serviceImage} source={item.picture} />
            <Text style={styles.serviceName}>{item.name}</Text>
        </View>
    );
    const Price = ({item}) => (
        <View style={styles.servicePrice}>
            <Text style={styles.serviceCost}>{item.name}</Text>
            <Text style={styles.serviceCost}>{item.price} Bs.</Text>
        </View>
    );
    
    
    const navigation = useNavigation(); 
    const route = useRoute();
    const selectedDate = date[3][1];

    const selectedServices = route.params.selServices;
    const servicesIds = [];


    let total = 0;  
    selectedServices.forEach((element) => {
        if (element.isSelected == true) {
            var myService = {
                picture: element.icon,
                name: element.service,
                price: element.price,
            };
            servicesIds.push(element.id);
            let price = parseInt(element.price, 10);
            total = total + price;
            serviceData.push(myService);
        }
    });

    let lastname = data[artist-1].lastname;
    let artistName = data[artist-1].name + " " + lastname;
    let artistPicture = data[artist-1].photo;
    
    let selectedTime = time.replace(/ /g, "");

    const renderItem = ({ item }) => {
        return (<Item item={item}/>);
    };
    const renderPrice = ({ item }) => {
        return (<Price item={item}/>);
    };
    const numColumns = 2;

    return (
        <Screen>
            <View style={styles.dataContainer}>
                <GoBackIcon onPress={() => navigation.navigate('Services')} />
                <Text style={styles.title}>Datos de la reserva</Text>
                <View style={styles.starsInfo}>
                    <Image source={require("../assets/images/stars_logo.png")} style={styles.logo} />
                    <Ionicons name="location" size={24} color="black" />
                    <Text>25 de Mayo Plaza Colon</Text>
                </View>
                <Image style={styles.artistPic} source={artistPicture} />
                <Text style={styles.artistName}>{artistName}</Text>
                <FlatList
                    contentContainerStyle={styles.servicesContainer}
                    data={serviceData}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    keyExtractor={(item) => item.name}
                />
                <View style={styles.dateContainer}>
                    <View style={styles.dateShadow}>
                        <View style={styles.date}>
                            <Text style={styles.day}>{`${date[0][1]}`}</Text>
                            <Text style={styles.month}>{`${date[1][1]}`}</Text>
                        </View>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.hour}>{ `${time}` }</Text>
                    </View>
                </View>
            </View>
            <FlatList
                contentContainerStyle={styles.totalServices}
                data={serviceData}
                renderItem={renderPrice}
                keyExtractor={(item) => item.name}
            />
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>
            <View style={styles.total}>
                <Text style={styles.totalPrice}>Total</Text>
                <Text style={styles.totalPrice}>{total} Bs.</Text>
            </View>
            <Text style={styles.personalInfo}>Datos personales</Text>
            <AppForm artist={artistName} date={selectedDate} time={selectedTime} services={servicesIds.toString()} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: '#fff',
        paddingBottom: 40,
    },
    title: {
        color: '#000',
        fontFamily: 'Cabin',
        fontSize: 25,
        marginLeft: 20,
        marginVertical: 10,
    },
    starsInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        width:'70%',
    },
    logo: {
        borderColor: "#000",
        borderRadius: 10,
        borderWidth: 1,
        height: 63,
        width: 63,
    },
    artistPic: {
        alignSelf: 'center',
        borderRadius: 100,
        height: 165,
        marginVertical: 10,
        width: 165,
    },
    artistName: {
        alignSelf: 'center',
        fontFamily: 'Cabin',
        fontSize: 24,
    },
    servicesContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    dateContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    service: {
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        elevation: 5,
        height: 80,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 120,
    },
    serviceImage: {
        height: 40,
        width: 40,
    },
    serviceName: {
        fontFamily: 'Cabin',
        fontSize: 14,
    },
    date: {
        alignItems: 'center',
        borderColor: '#000',
        borderRadius: 200,
        borderWidth: 1,
        height: 110,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 110,
    },
    dateShadow: {
        borderRadius: 200,
        backgroundColor: '#fff',
        elevation: 7,
        height: 110,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 110,
    },
    day: {
        fontFamily: 'Cabin',
        fontSize: 48,
    },
    month: {
        fontFamily: 'Cabin',
        fontSize: 15,
        top: -5,
    },
    time: {
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        height: 48,
        justifyContent: 'center',
        width: 155,
    },
    hour: {
        color: '#fff',
        fontFamily: 'Cabin',
        fontSize: 22,
    },
    totalServices: {
        marginHorizontal: 15,
        marginVertical: 15,
    },
    servicePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    serviceCost: {
        fontFamily: 'Cabin',
        fontSize: 16,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
    },
    totalPrice: {
        fontFamily: 'Cabin',
        fontSize: 20,
        marginHorizontal: 15,
    },
    personalInfo: {
        fontFamily: 'Cabin',
        fontSize: 20,
        marginVertical: 20,
        marginLeft: 15,
    },
});

export default Reservation;