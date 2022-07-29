import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';

import logoImage from '../assets/images/stars_logo.png';
import locationIcon from '../assets/images/location_big.png';
import phoneIcon from '../assets/images/phone.png';

import Screen from '../components/Screen';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pressed: false
    };
    this.mapOnClick = this.mapOnClick.bind(this);
  }
  mapOnClick() {
    this.setState({
        pressed: true
    });
  }
  render() {
    var _style;
    if (this.state.pressed) {
      _style = {
        height: 450,
        width: "100%"
      }
    }
    else {
      _style = {
        height: 125,
        width: 340
      }
    }

    return (
      <Screen style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logoImage}/>
        </View>
        <View style={styles.locationSection}>
        <MapView
          onPress={this.mapOnClick}
          style={[_style, styles.map]}
          initialRegion= {{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
        />
          <View style={styles.locationInfo}>
            <Image style={styles.locationIcon} source={locationIcon}/>
            <Text style={styles.text}>25 de Mayo and Plaza Colon{"\n"}Cochabamba, Bolivia</Text>
          </View>
          <View style={styles.locationInfo}>
            <Image style={styles.locationIcon} source={phoneIcon}/>
            <Text style={styles.text}>722769586-6944749</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>Nuestra primera parada es hace 30 mil años atrás, en una pequeña comunidad de homus sapiens donde vemos que solo los sabios y los que tenían mayor valoración en la tribu era quien cortaba el cabello y el vello facial</Text>
          <Text style={styles.text}>Los mechones del pelo se utilizaban también como amuletos y objeto de embalsamamiento, ya que desde el principio de la humanidad, el cabello se consideraba la residencia del alma y objeto mágico de gran valor.</Text>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  logoContainer: {
    backgroundColor: '#fff',
  },
  logo: {
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 40,
    resizeMode: 'contain',
    width: 200
  },
  locationSection: {
    backgroundColor: '#fff',
    marginBottom: 11,
    marginTop: 11
  },
  locationInfo: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: 32,
    marginTop: 20
  },
  locationIcon: {
    marginRight: 16
  },
  description: {
    backgroundColor: '#fff',
    paddingBottom: 112,
    paddingLeft: 32,
    paddingRight: 40,
    paddingTop: 48,
  },
  text: {
    fontFamily: 'Cabin'
  },
  map: {
    alignSelf: 'center',
    borderRadius: 20,
    //height: 125,
    marginTop: 16,
    //width: 340
  }
});