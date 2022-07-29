import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import colors from '../../config/colors';
import Text from "../admincomps/AdminText";

function ImageInput({ imageUri, onChangeImage, style, iconColor="black", noText }) {
    useEffect(() => {
        requestPermission();
      }, []);  

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted)
          alert('Se necesita permiso para acceder a su galería.')
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else 
            Alert.alert('Eliminar imagen', '¿Desea eliminar esta imagen?', [
                { text: 'Si', onPress: () => onChangeImage(null) },
                { text : "No"},
        ]);
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[styles.container, style]}>
                {!imageUri &&
                <View style={[styles.imageContainer]}> 
                    <MaterialCommunityIcons color={iconColor} name="plus" size={50} />
                    {!noText && <Text>Añadir imagen</Text>}
                </View>
                }
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
        elevation: 3,
        height: 170,
        justifyContent: 'center',
        margin: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.52,
        shadowRadius: 4.22,
        overflow: 'hidden',
        width: 132
    },
    image: {
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default ImageInput;