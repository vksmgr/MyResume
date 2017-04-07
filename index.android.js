/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from "./App/Comp/Login/Login";




export default class MyResume extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    }
});

AppRegistry.registerComponent('MyResume', () => MyResume);
