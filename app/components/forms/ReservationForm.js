import React, { useRef } from 'react';
import { View, StyleSheet, TextInput, TouchableHighlight, Text } from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup';

import colors from '../../config/colors';
import listingsApi from '../../api/listings';
import ErrorMessage from './ErrorMessage';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    phone: Yup.string().required().max(8).label("Phone")
})


function ResForm({ artist, date, time, services }) {

    const refEmail = useRef();
    const refPhone = useRef();


    const handleSubmit = async (listing) => {
        const result = await listingsApi.addListing({ ...listing, artist, date, time, services });
        if (!result.ok)
            return alert('no dude...');
        alert('yay!');
    }
    
    return (
        <View style={styles.formContainer}>
            <Formik
                initialValues={{ 
                    clientInfo: {
                        name: '', 
                        email: '', 
                        phone: '',
                    }
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <TextInput
                            blurOnSubmit={false}
                            onBlur={() => setFieldTouched("name")}
                            onChangeText={handleChange("name")}
                            onSubmitEditing={() => refEmail.current.focus()}
                            placeholder="Nombre"
                            style={styles.input}
                            returnKeyType="next"
                            underlineColorAndroid="white"
                        />
                        <ErrorMessage error={errors.name} visible={touched.name} />
                        <TextInput
                            blurOnSubmit={false}
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            onSubmitEditing={() => refPhone.current.focus()}
                            placeholder="Email"
                            ref={refEmail}
                            returnKeyType="next"
                            style={styles.input}
                            underlineColorAndroid= "white"
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Celular"
                            onBlur={() => setFieldTouched("phone")}
                            onChangeText={handleChange("phone")}
                            onSubmitEditing={handleSubmit}
                            ref={refPhone}
                            returnKeyType="done"
                            style={styles.input}
                            underlineColorAndroid= "white"
                        />
                        <ErrorMessage error={errors.phone} visible={touched.phone} />
                        <TouchableHighlight style={styles.formButton} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Agendame</Text>
                        </TouchableHighlight>
                    </>
                )}
            </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    formContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        height: 340,
        marginVertical: 20,
        width: '90%',
    },
    input: {
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: 'Cabin',
        fontSize: 16,
        height: 30,
        marginTop: 35,
        paddingLeft: 10,
        width: "85%",
    },
    formButton: {
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        marginTop: 30,
        width: 235,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Cabin',
        fontSize: 28,
    }
});

export default ResForm;