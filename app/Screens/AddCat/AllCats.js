import React,{Component} from 'react'
import {Text,View} from 'react-native'
import MenuButton from '../../components/MenuButton'
import Mainstyles from '../../components/Mainstyles'

export default class AllCats extends React.Component {
    constructor(){
        this.state={
            cats: {}
        }
    }
    render(){
        return(
            <View style={Mainstyles.container}>
                <MenuButton />
                <Text>All cats</Text>
            </View>
        )
    }
}