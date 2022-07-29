import { useFormikContext } from 'formik';
import React, { useState } from 'react';

import ImageInput from './ImageInputSimple';
import ErrorMessage from './ErrorMessage';

function FormImageInput({ name, imageUri, onUpload, style }) {
    const { errors, setFieldValue, touched, values, handleChange } = useFormikContext();
   // const [imageUri, setImageUri] = useState(); 
    return (
        <>
            <ImageInput 
                imageUri={imageUri}
                onChangeImage={handleChange(name)}
                style={style}
                onUpload={onUpload}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImageInput;