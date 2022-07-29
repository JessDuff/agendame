import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


const ServiceItem = ({ icon, title }) => {

    return (
        <View style={[styles.service]}>
            <Text style={styles.serviceName}>{title}</Text>
            <Image style={styles.icon} source={{ uri: icon }}/>
            <View style={styles.info}>
                <Feather name="clock" size={20} color="#4D4D4D" />
                <Text style={styles.time}>item.time Hora</Text>
                <Text style={styles.price}>item.price Bs.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    service: {
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
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
        width: 145,
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

export default ServiceItem;