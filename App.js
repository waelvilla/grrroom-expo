import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './app/navigation/DrawerNavigator'
import Home from './app/Screens/Home'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
