import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import Header from '../components/admincomps/Header';
import Screen from '../components/Screen';
import Text from '../components/admincomps/AdminText';
import colors from '../config/colors';
import HomeExamples from '../components/HomeExamples';
import AppForm from '../components/forms/AppForm';
import FormImagePicker from '../components/forms/FormImagePicker';
import SubmitButton from '../components/forms/SubmitButton';

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Seleccione al menos una imagen.")
});

function Counter(props) {
    const navigation = useNavigation();

    return (
        <Screen>
            <Header onPress={() => navigation.navigate('Add')} />
            
            <TouchableOpacity style={styles.sortButton} onPress={() => navigation.navigate('EditCounter')}>
                <Text style={styles.text}>Ordenar</Text>
            </TouchableOpacity>
            <AppForm 
                initialValues={{
                    images: []
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
            {/* <HomeExamples displayButton={true} /> */}
            <FormImagePicker name="images" />
            <SubmitButton title="Post" onPress={() => navigation.navigate('Add')} />
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    sortButton: {
        alignItems: 'flex-end',
        marginBottom: 15,
        marginHorizontal: 15,
    },
    text: {
        color: colors.secondary,
    }
});

export default Counter;