import React from 'react'
import { Platform, Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => { this.props.navigation.navigate(nav) }}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.profileImgView}>
                                <Image style={styles.profileImg} source={require('../../assets/profile.png')} />
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Wael A.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.botLinks}>
                        {this.navLink('Home', 'Home')}
                        {this.navLink('AddCat', 'Add a Cat')}
                        {this.navLink('Settings', 'Settings')}
                        {this.navLink('AddAppointment', 'Register Appointment')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scroller: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    topLinks: {
        height: 200,
        backgroundColor: 'black'
    },
    menuDrawer: {
        paddingTop: 40,
        color: 'white',
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        paddingLeft: 15,
        color: 'white',
        textAlign: 'left'
    },
    profileImgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 50

    },
    botLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: "lightgray"
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray'
    },
    about: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16
    }


})