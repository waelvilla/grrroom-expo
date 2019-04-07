import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import MenuButton from '../components/MenuButton'


export default class AddCat extends Component {
    constructor(){
        super()
        this.state={
            textValue: ""
        }
    }
    onChangeText(value){
        this.setState({
            textValue:value
        })
    }
    onSubmitField(){

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
                          onChangeText={(value)=>this.onChangeText(value)}
                          onSubmitEditing={this.onSubmitField}
                        
                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                          placeholder="What Does Your Cat Like?"
                          value={this.state.textValue}
                          onChangeText={(value)=>this.onChangeText(value)}
                          onSubmitEditing={this.onSubmitField}
                        
                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                          placeholder="What Does Your Cat Dislike?"
                          value={this.state.textValue}
                          onChangeText={(value)=>this.onChangeText(value)}
                          onSubmitEditing={this.onSubmitField}
                        
                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                          placeholder="Other Info we should know"
                          value={this.state.textValue}
                          onChangeText={(value)=>this.onChangeText(value)}
                          onSubmitEditing={this.onSubmitField}
                        
                        />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                          placeholder="Cat Photo"
                          value={this.state.textValue}
                          onChangeText={(value)=>this.onChangeText(value)}
                          onSubmitEditing={this.onSubmitField}
                        
                        />
                    </View>
                    <View style={styles.inputField}>
                        <Image source={require('../../assets/plus.png')}/>
                    </View>
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
    title:{
        fontSize:30,
        textAlign: 'center',
        paddingBottom: 10,
    },
    main:{
        paddingLeft: 30,
        top:50,
        paddingBottom: 50
    },
    inputField:{
        width: 350,
        height: 60,
        paddingBottom:10,
        justifyContent:'center',
        backgroundColor: 'white',
        color:'black',
        textAlign: 'center',
        borderBottomColor: 'black',
        borderWidth: 1
    }
})