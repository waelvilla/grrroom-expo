import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo'

import MenuButton from '../components/MenuButton'


export default class AddCat extends Component {
    constructor() {
        super()
        this.state = {
            textValue: "",
            catImg: require('../../assets/plus1.png'),
        }
    }
    onChangeText(value) {
        this.setState({
            textValue: value
        })
    }
    onSubmitField() {

    }
    onPressImg() {
        ImagePicker.launchImageLibraryAsync({ mediaTypes: 'Images', allowsEditing: true })

    }
    render() {

        return (
            <View style={styles.container} >
                <MenuButton navigation={this.props.navigation} />
                <View style={styles.main}>
                    <Text style={styles.title}> New Cat! </Text>
                    <View style={styles.inputField}>
                        <TextInput
                            placeholder="Cat Name"
                            value={this.state.textValue}
                            onChangeText={(value) => this.onChangeText(value)}
                            onSubmitEditing={this.onSubmitField}
                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                            placeholder="What Does Your Cat Like?"
                            value={this.state.textValue}
                            onChangeText={(value) => this.onChangeText(value)}
                            onSubmitEditing={this.onSubmitField}

                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                            placeholder="What Does Your Cat Dislike?"
                            value={this.state.textValue}
                            onChangeText={(value) => this.onChangeText(value)}
                            onSubmitEditing={this.onSubmitField}

                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                            placeholder="Other Info we should know"
                            value={this.state.textValue}
                            onChangeText={(value) => this.onChangeText(value)}
                            onSubmitEditing={this.onSubmitField}

                        />
                    </View>
                    <View>
                        <Text>Add Photo</Text>
                        <TouchableOpacity style={styles.imgField} onPress={() => { this.onPressImg() }}>
                            <Image style={styles.plus} source={this.state.catImg} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.btnContainer}
                    >
                        <Text style={styles.btnText}>Add Cat</Text>
                    </TouchableOpacity>
                </View>
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
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 10,
    },
    main: {
        paddingLeft: 30,
        top: 50,
        paddingBottom: 50
    },
    inputField: {
        width: 350,
        height: 60,
        paddingBottom: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        borderBottomColor: 'black',
        borderWidth: 1
    },
    imgField: {
        width: 100,
        height: 100,
        // paddingBottom: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        justifyContent: 'center'
    },
    plus: {
        width: 50,
        height: 50,
        marginLeft: 20
    },
    btnText: {
        textAlign: 'center',
        color: '#FFFFFF',
    },
    btnContainer: {
        backgroundColor: '#12B886',
        paddingVertical: 15,
        width: 100,
        marginLeft: 60,
        marginTop: 20

    },
})