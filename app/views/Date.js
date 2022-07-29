import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import GoBackIcon from '../components/GoBackIcon';
import Screen from '../components/Screen';


LocaleConfig.locales['es'] = {
    monthNames: ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
    today: 'Hoy'
  };
LocaleConfig.defaultLocale = 'es';

export default function DateView({onFinish}) {

    const [currentDate, setCurrentDate] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');
    var months = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var monthName = months[month];
        setCurrentDate(date);
        setCurrentMonth(monthName);
    }, []);

    const saveDate = async (selectedDay, selectedMonth, selectedWeekday, datestring) => {
      const day = ['@day_key', JSON.stringify(selectedDay)]
      const month = ['@month_key', selectedMonth]
      const weekDay = ['@week_key', selectedWeekday]
      const dates = ['@datestring_key', datestring]
      try {
        await AsyncStorage.multiSet([day, month, weekDay, dates]);
      } catch(e) {}
    } 
    
    function todayButton() {
        let today = new Date();
        let todayMonth = months[today.getMonth()];
        let todaystring = today.toISOString().split('T')[0];;

        saveDate(today.getDate(), todayMonth, "Hoy", todaystring);
        navigation.navigate('Time');
        if (onFinish) onFinish();
    }
    const navigation = useNavigation(); 
    return (
        <Screen style={styles.container}>
            <GoBackIcon onPress={() => navigation.navigate('Home')} />
            <Text style={styles.title}>¿Qué día estas disponible?</Text>
            <Calendar 
                onDayPress={(day) => {
                    let datestring = day.dateString;
                    let monthName = months[day.month -1];
                    var timestamp = day.timestamp;
                    var thisDay = new Date();
                    thisDay.setTime(timestamp);
                    let dayName = weekDays[thisDay.getDay()];
                    saveDate(day.day, monthName, dayName, datestring);
                    navigation.navigate('Time');
                    if (onFinish) onFinish();
                }}
                style={{
                    alignSelf: 'center',
                    width: 320
                }}
                theme={{
                    selectedDayBackgroundColor: 'black',
                    todayTextColor: '#fff',
                    todayBackgroundColor: '#000',
                    arrowColor: '#000',
                    textDayFontFamily: 'Cabin',
                    textMonthFontFamily: 'Cabin',
                    textDayHeaderFontFamily: 'Cabin',
                    textDayFontSize: 17,
                    textMonthFontSize: 18,
                }}
                enableSwipeMonths={true}
                minDate={new Date()}
            />
            <TouchableOpacity onPress={todayButton}>
                <View style={styles.todayButton}>
                    <Text style={styles.todayButtonText}>Hoy</Text>
                    <Text style={styles.todayButtonDay}>{currentDate}</Text>
                    <Text style={styles.todayButtonMonth}>{currentMonth}</Text>
                </View>
            </TouchableOpacity>    
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    time: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 25
    },
    title: {
        alignSelf: 'center',
        fontFamily: 'Cabin',
        fontSize: 22,
        marginBottom: 10,
        marginTop: 20
    },
    todayButton: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 100,
        elevation: 5,
        height: 135,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 135
    },
    todayButtonMonth: {
        fontFamily: 'Cabin',
        fontSize: 16,
        lineHeight: 27,
        marginTop: -4,
    },
    todayButtonDay: {
        fontFamily: 'Cabin',
        fontSize: 65,
        lineHeight: 75
    }
});
