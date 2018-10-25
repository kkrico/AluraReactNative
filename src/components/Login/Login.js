import React from 'react';
import { Dimensions, View, TextInput, Button, Text, AsyncStorage } from 'react-native';
import API from "../../API/InstaLuraApiAPI";

const width = Dimensions.get("screen").width;

class Login extends React.Component {

    static navigatorStyle = {
        navBarTitleTextCentered: true,
        navBarSubTitleTextCentered: true,
    };
    
    constructor(props) {
        super(props);


        this.state = {
            usuario: '',
            senha: '',
            mensagem: ''
        }
    }

    onChangeText(texto, field) {
        const novoState = { ...this.state };
        novoState[field] = texto;
        this.setState(novoState);
    }

    render() {
        return (<View style={styles.container}>
            <Text style={styles.titulo}>Instalura</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="login" onChangeText={texto => this.onChangeText(texto, "usuario")} autoCapitalize="none"></TextInput>
                <TextInput style={styles.input} placeholder="Senha" onChangeText={texto => this.onChangeText(texto, "senha")} secureTextEntry={true}></TextInput>
                <Button title="Login" onPress={this.efetuaLogin.bind(this)}></Button>
            </View>
            <Text style={styles.mensagemValidacao}>{this.state.mensagem}</Text>
        </View>)
    }

    efetuaLogin() {
        API
            .login(this.state.usuario, this.state.senha)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }

                throw new Error("Não foi possível efetuar o login")
            })
            .then(token => {
                AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('usuario', this.state.usuario);

                this.props.navigator.resetTo({
                    screen: 'Feed',
                    title: 'Instalura - Feed'
                })
            })
            .catch(e => this.setState({ mensagem: e.message }))
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: width * 0.8
    },
    mensagemValidacao: {
        color: '#e74c3c',
        marginTop: 15
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 26
    }
}

export default Login;