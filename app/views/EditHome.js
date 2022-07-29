import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import starsLogo from '../assets/images/stars_logo_big.png';
import ImageInput from '../components/forms/ImageInput';
import Screen from '../components/Screen';
import colors from '../config/colors';
import SecondaryButton from '../components/SecondaryButton';
import ServicesList from '../components/ServicesList';
import defaultStyles from '../config/styles';
import HomeArtistsList from '../components/HomeArtistsList';
import HomeExamples from '../components/HomeExamples';

function EditHome(props) {
    const [imageUri, setImageUri] = useState();
    const navigation = useNavigation(); 

    return (
        <Screen>
            <ImageInput 
                imageUri={imageUri}
                onChangeImage={(uri) => setImageUri(uri)}
                style={styles.imageInput} 
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={starsLogo} />
            </View>
            <SecondaryButton onPress={() => navigation.navigate('EditDescription')} title="Editar descripción" backgroundColor="white" color="black" />
            <View style={styles.container}>
                <HomeExamples />
            </View>
            <SecondaryButton onPress={() => navigation.navigate('Counter')} title="Editar mostrador" backgroundColor="white" color="black" />
            <View style={styles.subtitleContainer}>
                <Text style={defaultStyles.subtitle}>Servicios</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditServices')}>
                    <MaterialCommunityIcons name="pencil-outline" color={colors.secondary} size={30} />
                </TouchableOpacity>
            </View>
            <ServicesList />
            <View style={styles.subtitleContainer}>
                <Text style={defaultStyles.subtitle}>Artistas</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditArtists')}>
                    <MaterialCommunityIcons name="pencil-outline" color={colors.secondary} size={30} />
                </TouchableOpacity>
            </View>
            <HomeArtistsList />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    examples: {
        alignSelf: 'center',
        marginTop: 20,
        width: '90%',
    },
    image: {
        alignSelf: 'center',
        marginTop: 5,
        width: 150,
    },
    imageInput: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderRadius: 0,
        elevation: 0,
        height: 290,
        margin: 0,
        shadowColor: 'transparent',
        width: '100%',
    },
    logoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 100,
        height: 165,
        justifyContent: 'center',
        marginTop: -82.5,
        width: 165
    },
    logo: {
        paddingTop: 20,
        resizeMode: 'contain',
        width: 145
    },
    subtitleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
    }
});

export default EditHome;