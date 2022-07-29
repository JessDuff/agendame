import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/native';

import Header from '../components/admincomps/Header';
import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import FormField from '../components/forms/FormField';
import Text from '../components/admincomps/AdminText';
import SubmitButton from '../components/forms/SubmitButton';
import FormImageInput from '../components/forms/FormImageInput'
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("name"),
    time: Yup.number().required().label("time"),
    price: Yup.number().required().label("price"),
    image: Yup.string().required().label("image"),
});

function AddService(props) {
    const navigation = useNavigation(); 
    const [imageUri, setImageUri] = useState();
    //const location = useLocation();

    return (
        <Screen>
            <Header onPress={() => navigation.navigate('EditServices')} />
            <View style={styles.container}>
                <View style={styles.form}>
                    <AppForm
                        initialValues={{
                            name: "",
                            time: "",
                            price: "",
                            image: "",
                        }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        <FormImageInput 
                            imageUri={imageUri}
                            //onChangeImage={(uri) => setImageUri(uri)}
                            style={styles.imageInput}
                            name="image"
                            onUpload={(uri) => setImageUri(uri)}
                        />
                        <FormField 
                            icon="cogs"
                            maxLength={50} 
                            name="name"
                           // onSubmitEditing={() => ref.focus()} 
                            placeholder="Nombre"
                            returnKeyType="next"
                            underlineColorAndroid='transparent' 
                            width={180}
                        />
                        <View style={styles.inputText}>
                            <FormField
                                icon="clock-time-four-outline"
                                keyboardType="numeric"
                                maxLength={5}
                                name="time"
                                //onSubmitEditing={() => refPrice.current.focus()}
                                placeholder="Duración"
                                returnKeyType="next"
                                underlineColorAndroid='transparent'
                               // ref={ref}
                                width={80}
                            />
                            <Text>horas</Text>
                        </View>
                        <View style={styles.inputText}>
                            <FormField
                                icon="currency-usd-circle"
                                keyboardType="numeric"
                                maxLength={5}
                                name="price"
                                //onSubmitEditing={() => refEmail.current.focus()}
                                placeholder="Precio"
                                returnKeyType="done"
                                underlineColorAndroid='transparent'
                                //ref={refPrice}
                                width={80}
                            />
                            <Text>Bs.</Text>
                        </View>
                        <SubmitButton title="Guardar" onPress={() => navigation.navigate('EditServices')} />
                    </AppForm>

                </View>

            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    form: {
        alignItems: 'flex-start'
    },
    imageInput: {
        alignSelf: 'center',
        marginVertical: 25,
    },
    inputText: {
        alignItems: 'baseline',
        flexDirection: 'row'
    },
});

export default AddService;