import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import MapPicker from "react-native-map-picker";

import Screen from '../components/Screen';
import Header from '../components/admincomps/Header';
import ImageInput from '../components/forms/ImageInput';
import colors from '../config/colors';
import Text from '../components/admincomps/AdminText';
import FormField from '../components/forms/FormField';
import AppForm from '../components/forms/AppForm';
import SubmitButton from '../components/forms/SubmitButton';
import FormImageInput from '../components/forms/FormImageInput';

function AddDescription(props) {
    const [imageUri, setImageUri] = useState();
    const [location, setLocation] = useState();
    const [showLocation, setShowLocation] = useState(false);

    const navigation = useNavigation(); 

    const handlePress = (latitude, longitude) => {
        setShowLocation(false);
        setLocation(latitude, longitude);
    }
    
    return (
        <Screen style={styles.container}>
            <Header onPress={() => navigation.navigate('Add')} />
            <AppForm
                initialValues={{
                    phone: "",
                    description: "",
                    image: "",
                }}
                onSubmit={(values) => console.log(values)}
            >
                <View style={styles.imageContainer}>
                <FormImageInput 
                    imageUri={imageUri}
                    style={styles.imageInput}
                    name="image"
                    onUpload={(uri) => setImageUri(uri)}
                />
                </View>
                <View style={styles.infoContainer}>
                    {!showLocation && 
                        <TouchableOpacity style={styles.location} onPress={() => setShowLocation(true)}>
                            <MaterialCommunityIcons name="map-marker" color={colors.black} size={50} />
                            {location==null && <Text style={styles.locationText}>Añadir ubicación</Text>}
                            {location!=null && (<View style={{flexDirection:'column'}}><Text style={styles.locationText}>Latitud: {location.latitude.toString()}</Text><Text style={styles.locationText}>Longitud: {location.longitude.toString()}</Text></View>)}
                            <MaterialCommunityIcons name="plus" color={colors.secondary} size={50} />
                        </TouchableOpacity>
                    }
                    {showLocation && 
                        <View style={styles.locationContainer}>
                            <MapPicker
                                initialCoordinate={{
                                    latitude: -17.39209,
                                    longitude: -66.15684,
                                }}
                                onLocationSelect={({latitude, longitude}) => handlePress({latitude, longitude})}
                                buttonText={"Añadir ubicación"}
                                buttonStyle={styles.locationButton}
                                textStyle={styles.locationButtonText}
                            />
                        </View>
                    }
                    <FormField
                        icon="phone"
                        keyboardType="numeric"
                        maxLength={20}
                        name="phone"
                        placeholder="Número de teléfono"
                        returnKeyType="done"
                        underlineColorAndroid='transparent'
                        width={180}
                    />
                </View>
                <View style={styles.description}>
                    <FormField
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Descripción"
                        returnKeyType="done"
                    /> 
                    <SubmitButton title="Guardar" onPress={() => navigation.navigate('Add')} />  
                </View>
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    },
    description: {
        backgroundColor: colors.white,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    imageInput: {
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 0,
        elevation: 0,
        height: 180,
        shadowColor: colors.white,
        width: 180,
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingBottom: 20,
    },
    infoContainer: {
        //alignItems: 'center',
        backgroundColor: colors.white,
        marginVertical: 15,
        paddingBottom: 30,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    location: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.secondary,
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: 'row',
        height: 110,
        justifyContent: 'space-between',
        marginBottom: 30,
        //marginHorizontal: 15,
        paddingHorizontal: 20,
       // width: '90%'
    },
    locationText: {
        color: colors.secondary
    },
    locationContainer: {
        alignSelf: 'center',
        flex: 1, 
        height: 400,
        width: 390,
    },
    locationButton: {
        borderRadius: 10,
        width: '70%',
        zIndex: 100,
    },
    locationButtonText: {
        fontFamily: 'ReemKufi',
        fontSize: 16,
    },
});

export default AddDescription;