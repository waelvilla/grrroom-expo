import React from 'react'
import {Platform, Dimensions} from 'react-native'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import MenuDrawer from '../navigation/MenuDrawer'

//screens
import Home from '../Screens/Home'
import AddAppointment from '../Screens/AddAppointment'
import ReportProblem from '../Screens/ReportProblem'
import AddCat from '../Screens/AddCat/AddCat'
import AllCats from '../Screens/AddCat/AllCats'

const WIDTH = Dimensions.get('window').width

const DrawerConfig= {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({navigation})=>{
        return (
            <MenuDrawer navigation={navigation} />
        )
    }
}
const DrawerNavigator= createDrawerNavigator({
    AddCat: {
        screen: AddCat
    },
    Home: {
        screen: Home
    },
    AddAppointment: {
        screen: AddAppointment
    },
    ReportProblem: {
        screen: ReportProblem
    },
    AllCats: {
        screen: AllCats
    }
},
DrawerConfig)



export default createAppContainer(DrawerNavigator)