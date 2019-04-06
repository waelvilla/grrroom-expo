import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddCat extends Component {
    render() {
        return (
            <View style={styles.container} >
               <Text>Add Cat</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {

    }
})