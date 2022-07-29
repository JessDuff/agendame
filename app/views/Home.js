import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

import barbershopImage from '../assets/images/barber.png';
import starsLogo from '../assets/images/stars_logo_big.png';
import HomeExamples from '../components/HomeExamples'
import Screen from '../components/Screen';
import ServicesList from '../components/ServicesList';
import HomeArtistsList from '../components/HomeArtistsList';
import Button from '../components/SecondaryButton';
import colors from '../config/colors';
import defaultStyles from '../config/styles';


export default function Home({navigation}) {

  const [loaded] = useFonts({
    Cabin: require('../assets/fonts/Cabin-Regular.ttf'),
    ReemKufi: require('../assets/fonts/ReemKufi-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }
  
  return (
    <Screen>
      <View>
        <Image style={styles.barbershopImage} source={barbershopImage} />
        <View style={styles.logoContainer}>
          <Image style={styles.starsLogo} source={starsLogo} />
        </View>
        <Button title="Agendame" onPress={() => navigation.navigate('Agendame')} />
      </View>
      <Text style={defaultStyles.subtitle}>Catálogo</Text>
      <HomeExamples displayButton={true} />
      <Text style={defaultStyles.subtitle}>Servicios</Text>
      <ServicesList />
      <Text style={defaultStyles.subtitle}>Artistas</Text>
      <HomeArtistsList />
    </Screen>
  );
}

const styles = StyleSheet.create({
  barbershopImage: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: 290,
    width: 'auto'
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
  starsLogo: {
    paddingTop: 20,
    resizeMode: 'contain',
    width: 145
  },
});