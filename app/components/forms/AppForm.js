import React from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            style={styles.form}
        >
            {() => 
                <>{children}</>
            }
        </Formik>
    );
}
const styles = StyleSheet.create({
    form: {
        alignItems: 'flex-end'
    }
    
})

export default AppForm;