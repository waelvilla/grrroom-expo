import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MenuButton from '../components/MenuButton'


export default class Home extends Component {

    render() {
        return (
            <View style={styles.container} >
                <MenuButton navigation={this.props.navigation} />
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo100.png')} />
                </View>
                <Text style={styles.welcome}> Welcome to Grrroom! </Text>
                <TouchableOpacity 
                  style={styles.btnContainer}
                  onPress={()=>{this.props.navigation.navigate("AddCat")}}
                  >
                    <Text style={styles.btnText}>Add a Cat!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#97D8E1',
        height: '100%',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    logo: {
        height: 150,
        width: 150
    },
    welcome: {
        fontSize: 26,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    btnContainer: {
        backgroundColor: '#12B886',
        paddingVertical: 15,
        width: 100,
    },
    btnText: {
        textAlign: 'center',
        color: '#FFFFFF',
    },


});

