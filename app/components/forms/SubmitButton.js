import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

function SubmitButton({ title, onPress }) {
    const { handleSubmit } = useFormikContext();

    const handlePress = () => {
        handleSubmit();
        onPress();
    }

    return (
        <AppButton title={title} onPress={handlePress} />
    );
}

export default SubmitButton;