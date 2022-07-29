import React, {useState} from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import GoBackIcon from '../components/GoBackIcon';


const DATA = [
  {
    id: '9am',
    time: '9 : 00',
    period: 'AM',
  },
  {
    id: '10am',
    time: '10 : 00',
    period: 'AM',
  },
  {
    id: '11am',
    time: '11 : 00',
    period: 'AM',
  },
  {
    id: '12pm',
    time: '12 : 00',
    period: 'PM',
  },
  {
    id: '1pm',
    time: '1 : 00',
    period: 'PM',
  },
  {
    id: '2pm',
    time: '2 : 00',
    period: 'PM',
  },
  {
    id: '3pm',
    time: '3 : 00',
    period: 'PM',
  },
  {
    id: '4pm',
    time: '4 : 00',
    period: 'PM',
  },
  {
    id: '5pm',
    time: '5 : 00',
    period: 'PM',
  },
  {
    id: '6pm',
    time: '6 : 00',
    period: 'PM',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.time, backgroundColor]}>
    <Text style={[styles.hour, textColor]}>{item.time}<Text style={[styles.hour, styles.period, textColor]}>{item.period}</Text></Text>
  </TouchableOpacity>
);


let monthData;
const storeDate = async () => {
    try {
        const value = await AsyncStorage.getItem('@month_key')
        if(value !== null) {
            monthData = value;
        }
    } catch(e) {}
}
storeDate();

  let dayData;
  const storeDay = async () => {
      try {
          const value = await AsyncStorage.getItem('@day_key')
          if(value !== null) {
              dayData = value;
          }
      } catch(e) {}
  }
  storeDay();

const Time = ({onFinish, date}) => {
  
  

  //const { dayKey, monthKey } = route.params;

  const [selectedId, setSelectedId] = useState(null);
  //const [timeSelected, setTimeSelected] = useState('');
    
    
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000" : "#fff";
    const color = item.id === selectedId ? '#fff' : '#000';

    function onPress() {
      navigation.navigate('Artists');
      setSelectedId(item.id);
      const value = item.time + " " + item.period;
      storeData(value);
      if (onFinish) onFinish();
    }
    
    const storeData = async (user) => {
      try {
        await AsyncStorage.setItem('@time_key', user);
      } catch (e) {
        // saving error
      }
    }  
    return (
      <Item
        item={item}
        onPress={() => { onPress() }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.container}>
      <GoBackIcon onPress={() => navigation.navigate('Agendame')} />
      <View style={styles.date}>
      <Text style={styles.dateText}>{`${date[2][1]}, ${date[0][1]} de ${date[1][1]}`}</Text>
        <Text style={styles.title}>Hora del encuentro</Text>
      </View>
      <FlatList
        style={styles.timeContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  arrow: {
    marginHorizontal: 5,
    marginVertical: 15,
  },
  date: {
    alignItems: 'center',
  },
  dateText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Cabin',
    fontSize: 18
  },
  title: {
    fontFamily: 'Cabin',
    fontSize: 24
  },
  timeContainer: {
    marginBottom: 140,
    marginTop: 20,
  },
  time: {
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.52,
    shadowRadius: 4.22,
  },
  hour: {
    fontFamily: 'Cabin',
    fontSize: 22,
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 8,
  },
  period: {
    fontSize: 10,
  }
});

export default Time;