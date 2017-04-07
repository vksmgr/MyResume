/**
 * Created by EARN on 07-04-2017.
 */

/**
 * Created by EARN on 07-04-2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import LoginForm from "./LoginForm";

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/trans.png')}
                    />
                    <Text style={styles.title}> SHOW YOUR RESUME</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    text: {
        color: '#ffff',
        fontSize: 20,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 150,
    },
    title: {
        color: '#ffff',
        marginTop: 10,
        width: 100,
        textAlign: 'center',
        opacity: 0.8

    },
    formContainer: {}
});
AppRegistry.registerComponent('Login', () => Login);
