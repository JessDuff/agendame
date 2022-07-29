import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/admincomps/Header';
import SecondaryButton from '../components/SecondaryButton';
import Screen from '../components/Screen';
import ServicesList from '../components/ServicesList';

function ServicesAdded(props) {
    const navigation = useNavigation(); 
    return (
        <Screen>
            <Header onPress={() => navigation.navigate('Add')} />
            <ServicesList/>
            <SecondaryButton onPress={() => navigation.navigate('AddService')} title="Nuevo Servicio" />
        </Screen>
    );
}

export default ServicesAdded;