import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from "yup";

import Header from '../components/admincomps/Header';
import FormImageInput from '../components/forms/FormImageInput'
import FormField from '../components/forms/FormField';
import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import Text from '../components/admincomps/AdminText';
import colors from '../config/colors';
import TimePicker from '../components/forms/TimePicker';
import SubmitButton from '../components/forms/SubmitButton';
import DaysPicker from '../components/DaysPicker';
import ServicesPicker from '../components/ServicesPicker';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("name"),
    image: Yup.string().required().label("image"),
});
function AddArtist(props) {
    const navigation = useNavigation(); 
    const [imageUri, setImageUri] = useState(); 
    const [firstTime, setFirstTime] = useState('');
    const [secondTime, setSecondTime] = useState('');
    const [days, setDays] = useState([]);
    const [services, setServices] = useState([]);
    //const [selectedDays, setServices] = useState();
    
    const getFirstTime = (data) => {
        setFirstTime(data);
    }
    //console.log("tiempo " + firstTime);

    const getSecondTime = (data) => {
        setSecondTime(data);
    }
    //console.log("segundo " + secondTime);

    const getDays = (data) => {
        setDays(data);
    }
    let selectedDays = [];  
    days.forEach((element) => {
        if (element.isSelected == true) {
            selectedDays.push(element.id);
        }
    });
    //console.log(selectedDays);

    const getServices = (data) => {
        setServices(data);
    }
    let selectedServices = [];  
    services.forEach((element) => {
        if (element.isSelected == true) {
            selectedServices.push(element.id);
        }
    });
    //console.log(selectedServices);

    return (
        <Screen>
            <Header onPress={() => navigation.navigate('EditArtists')} />
            <View style={styles.container}>
                <AppForm
                    initialValues={{
                        name: "",
                        image: "",
                        firstTime: "",
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormImageInput 
                        imageUri={imageUri}
                        style={styles.imageInput}
                        name="image"
                        onUpload={(uri) => setImageUri(uri)}
                    />
                    <FormField 
                        icon="account"
                        maxLength={50} 
                        name="name" 
                        placeholder="Nombre"
                        underlineColorAndroid='transparent' 
                        width={200}
                    />
                    <DaysPicker getDays={getDays} />
                    <Text style={styles.title}>Horario</Text>
                    <View style={styles.timeContainer}>
                        <TimePicker getTime={getFirstTime} />
                        <Text style={styles.separator}>-</Text>
                        <TimePicker getTime={getSecondTime} />
                    </View>
                    <Text style={styles.title}>Especialidades</Text>
                    <ServicesPicker getServices={getServices} />
                    <SubmitButton title="Guardar" onPress={() => navigation.navigate('EditArtists')} /> 
                </AppForm>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 15,
    },
    imageInput: {
        borderRadius: 100,
        elevation: 0,
        height: 180,
        shadowColor: colors.white,
        width: 180,
    },
    separator: {
        fontSize: 30,
        marginHorizontal: 7,
    },
    timeContainer: {
        flexDirection: 'row'
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 22,
        marginLeft: 30,
        marginTop: 25,
    }
});

export default AddArtist;