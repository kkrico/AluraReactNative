import styles from "./Styles";
import React, { Component } from 'react';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';

class InputComentario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valorComentario: ""
        }
    }

    render() {
        const { setRef, carregaComentario } = this.props;
        return (<View style={styles.novoComentario}>
            <TextInput placeholder="Adicione um comentário" style={styles.input}
                ref={setRef}
                onChangeText={text => this.setState({ valorComentario: text })}
            ></TextInput>
            <TouchableOpacity onPress={carregaComentario}>
                <Image style={styles.botaoEnviar} source={require("../../resources/img/send.png")} />
            </TouchableOpacity>
        </View>)
    }
}


export default InputComentario