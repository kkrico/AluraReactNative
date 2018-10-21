import styles from "../Styles";
import React from 'react';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';

class InputComentario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorComentario: ""
        }
    }

    render() {
        const { comentarioCallBack } = this.props;
        const adicionarComentario = () => {
            comentarioCallBack(this.state.valorComentario, this.inputComentario);
            this.setState({ valorComentario: "" });
        };
        return (<View style={styles.novoComentario}>
            <TextInput placeholder="Adicione um comentário" style={styles.input}
                ref={input => this.inputComentario = input}
                onSubmitEditing={adicionarComentario}
                onChangeText={text => this.setState({ valorComentario: text })}
                underlineColorAndroid={"transparent"}
            ></TextInput>
            <TouchableOpacity onPress={adicionarComentario}>
                <Image style={styles.botaoEnviar} source={require("../../../resources/img/send.png")} />
            </TouchableOpacity>
        </View>)
    }
}

export default InputComentario;