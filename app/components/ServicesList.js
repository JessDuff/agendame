import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import data from '../assets/data/servicesData';
import ServiceItem from './ServiceItem';
import listingsApi from '../api/listings';
import Text from './admincomps/AdminText';
import Button from './SecondaryButton';

const ServicesList = () => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        if(!response.ok) return setError(true);

        setError(false);
        setListings(response.data);
    }

    var numColumns = 2;
    return (
        <View>
            {error && (
                <>
                    <Text>No se pudo recuperar los datos.</Text>
                    <Button title="Reintentar" onPress={loadListings} />
                </>
            )}
            <FlatList 
                contentContainerStyle={styles.servicesContainer}
                data={listings}
                numColumns={numColumns}
                keyExtractor={(listing) => listing.id.toString()}  
                renderItem={({ item }) => (
                <ServiceItem 
                    icon={item.images[0].url} 
                    title={item.title}
                />
                
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    servicesContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
    },
})

export default ServicesList;