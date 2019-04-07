import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class AddAppointment extends Component {
    render() {
        return (
            <View style={styles.container} >
                <MenuButton navigation={this.props.navigation} />
                <Text> Add Appointment </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
})