import React, { useRef, Component, useState } from 'react';

import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';
// refEmail = useRef();
// refPhone = useRef();

export default class ReservationForm extends React.Component {
    
    constructor() {
        super();
        this.state={
            name:'',
            email:'',
            phone:'',
        }
    }
    // const refEmail = useRef();
        // const refPhone = useRef();
    updateValue(text, field) {
        if (field === 'name') {
            this.setState({
                name: text,
            })
        } 
        else if (field === 'email') {
            this.setState({
                email:text,
            })
        }
        else if (field === 'phone') {
            this.setState({
                phone:text,
            })
        }

    }
    submit() {
        let userData={}
        userData.name=this.state.name,
        userData.email=this.state.email,
        userData.phone=this.state.phone

        try {
            fetch('https://webhook.site/20f899d6-563c-4d78-b921-8309404c697e', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
        } catch(e) {
            console.log(e);
        }
    }
    
    render() {
        // this.refEmail = React.useRef();
        // this.refPhone = React.useRef();
        return (
            <View style={styles.formContainer}>
    
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    underlineColorAndroid="white"
                    returnKeyType="next"
                    //onSubmitEditing={() => refEmail.current.focus()}
                    onChangeText={(text => this.updateValue(text, 'name'))}
                    blurOnSubmit={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid= "white"
                    returnKeyType="next"
                    //onSubmitEditing={() => refPhone.current.focus()}
                    onChangeText={(text => this.updateValue(text, 'email'))}
                    //ref={refEmail}
                    blurOnSubmit={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Celular"
                    keyboardType="numeric"
                    returnKeyType="done"
                    underlineColorAndroid= "white"
                   // onSubmitEditing={() => alert("Data saved")}
                    onChangeText={(text => this.updateValue(text, 'phone'))}
                    //ref={refPhone}
                />
                <TouchableHighlight style={styles.formButton} onPress={()=> this.submit()}>
                    <Text style={styles.buttonText}>Agendame</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 340,
        marginVertical: 20,
        width: '90%',
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: 'Cabin',
        fontSize: 16,
        height: 30,
        marginTop: 35,
        paddingLeft: 10,
        width: "85%",
    },
    formButton: {
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        marginTop: 30,
        width: 235,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Cabin',
        fontSize: 28,
    }
})

//export default ReservationForm;