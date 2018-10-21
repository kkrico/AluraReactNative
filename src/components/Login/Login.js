import React, { Component } from 'react';
import { Dimensions, Text, View, Image, TextInput } from 'react-native';

class Login extends React.Component {

    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View>
                <Text>Login: </Text>
                <TextInput placeholder="login"></TextInput>
                <Text>Senha:</Text>
                <TextInput>Senha</TextInput>
            </View>
        </View>)
    }
}

export default Login;