import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFormikContext } from 'formik';

import Text from '../admincomps/AdminText';

function TimePicker({ getTime }) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('00:00');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        let time = new Date(currentDate).toLocaleTimeString();
        let timeWitouthSeconds = time.slice(0, 5);
        setDateText(timeWitouthSeconds);
        getTime(timeWitouthSeconds);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {setShow(true)}}>
                <Text style={styles.text}>{dateText}</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="time"
                    display="default"
                    onChange={onChange}
                    style={{width: 320, backgroundColor: "white"}}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    text: {
        fontSize: 30,
        marginHorizontal: 7,
    }
});

export default TimePicker;