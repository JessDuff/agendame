import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './app/views/Home';
import Date from './app/views/Date';
import Time from './app/views/Time';
import Description from './app/views/Description';
import Services from './app/views/Services';
import Artists from './app/views/Artists';
import Reservation from './app/views/Reservation';
import AddService from './app/views/AddService';
import ServicesAdded from './app/views/ServicesAdded';
import AddDescription from './app/views/AddDescription';
import AddArtist from './app/views/AddArtist';
import ArtistsAdded from './app/views/ArtistsAdded';
import Counter from './app/views/Counter';
import EditHome from './app/views/EditHome';
import EditDescription from './app/views/AddDescription';
import EditServices from './app/views/ServicesAdded';
import EditArtists from './app/views/ArtistsAdded';
import EditCounter from './app/views/SortCounter';


const Tab = createBottomTabNavigator();

const App = () => {

  const [time, setTime] = useState({});

  const findTime = async () => {
    const result = await AsyncStorage.getItem('@time_key');
    if (result !== null) {
      setTime(result);
    }
  };

  const [date, setDate] = useState({});

  const getDate = async () => {
      const values = await AsyncStorage.multiGet(['@day_key', '@month_key', '@week_key', '@datestring_key']);
      if (values !== null) {
        setDate(values);
      }
  }

  // const [services, setServices] = useState({});

  // const getServices = async () => {
  //     const values = await AsyncStorage.getItem('@services_key');
  //     if (values !== null) {
  //       setServices(values);
  //     }
  // }

  const [artist, setArtist] = useState({});

  const getArtist = async () => {
      const values = await AsyncStorage.getItem('@artistPic_key');
      if (values !== null) {
        setArtist(values);
      }
  }


  

  useEffect(() => {
    findTime();
    getDate();
    //getServices();
    getArtist();
  }, []);

  return (
  <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'md-home-sharp';
            } else if (route.name === 'Description') {
              iconName = 'information-circle';
            } else if (route.name === 'Agendame') {
              iconName = 'list';
            } else if (route.name === 'Reservation') {
              iconName = 'pencil';
            } else if (route.name === 'Add') {
              iconName = 'add-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarButton: [
            "Time",
            "Services",
            "Artists",
            "Reservation",
            "EditDescription",
            "EditServices",
            "EditArtists",
            "EditCounter",
            "AddService",
            "AddArtist",
            "Counter"
          ].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
        })}
      tabBarOptions={{
        activeTintColor: 'lightgray',
        inactiveTintColor: 'black',
        labelPosition: 'below-icon',
        adaptive: 'false',
        keyboardHidesTabBar: 'true',
      }}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Agendame" children={()=><Date onFinish={getDate}/>} />
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Time" children={()=><Time onFinish={findTime} date={date}/>} />
      {/* <Tab.Screen name="Services" children={()=><Services onFinish={getServices}/>} /> */}
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Artists" children={()=><Artists onFinish={getArtist} />} />
      <Tab.Screen name="Reservation" children={()=><Reservation time={time} date={date} artist={artist} />}/>
      <Tab.Screen name="Add" children={()=><EditHome />}/>
      <Tab.Screen name="EditDescription" children={()=><EditDescription />}/>
      <Tab.Screen name="EditServices" children={()=><EditServices />}/>
      <Tab.Screen name="EditArtists" children={()=><EditArtists />}/>
      <Tab.Screen name="EditCounter" children={()=><EditCounter />}/>
      <Tab.Screen name="Counter" children={()=><Counter />}/>
      <Tab.Screen name="AddService" children={()=><AddService />}/>
      <Tab.Screen name="AddArtist" children={()=><AddArtist />}/>
    </Tab.Navigator>
  </NavigationContainer>
);
    }

 export default App;