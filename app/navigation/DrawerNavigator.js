import React from 'react'
import {Platform, Dimensions} from 'react-native'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'

import Home from '../Screens/Home'

const WIDTH = Dimensions.get('window').width
const DrawerNavigator= createDrawerNavigator({
    Home: {
        screen: Home
    }
})


export default createAppContainer(DrawerNavigator)