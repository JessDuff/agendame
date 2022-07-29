import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from "formik";

import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';

function FormField({ name, onSubmit, ref, width, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    
    return (
        <View style={styles.container}>
        <AppTextInput
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            onSubmitEditing={onSubmit}
            ref={ref}
            width={width}
            {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    }
});

export default FormField;