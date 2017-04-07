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
    TextInput,
    View,
    Text,
    TouchableOpacity,
    StatusBar,

} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                barStyle={"light-content"}
                />
                <TextInput
                    placeholder={"username or email"}
                    placeholderTextColor={"rgba(255,255,255,0.6)"}
                    returnKeyType={"next"}
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType={"email-address"}
                    autoCapitalize={"none"}
                    autoCorrect={false}

                />

                <TextInput
                    placeholder={"password"}
                    placeholderTextColor={"rgba(255,255,255,0.6)"}
                    returnKeyType={"go"}
                    style={styles.input}
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}

                />
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    input: {
        height: 35,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 5,
        color: '#ffff',
        paddingHorizontal: 10,
    },
    buttonContainer:{
      backgroundColor:'#2980b9',
       paddingVertical: 10
    },
    buttonText:{
        textAlign: 'center',
        color: '#ffff',
        fontWeight: '700'

    }
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);
