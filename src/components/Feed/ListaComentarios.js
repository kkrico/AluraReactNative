import React from 'react';
import comApresentaNadaSeListaVazia from "../util/comApresentaNadaSeListaVazia";
import { Text, View } from 'react-native';
import styles from "../Styles";


const innerComentarios = ({comentarios}) => {
    return comentarios.map((comentario, index) => {
        return <View style={styles.comentario} key={index}>
            <Text style={styles.loginusuario}>{comentario.login}: </Text>
            <Text>{comentario.texto}</Text>
        </View>
    });
}

const Comentarios = comApresentaNadaSeListaVazia(innerComentarios);

const ComentariosComPropsAsLista = (props) => {
    const innerProps = {...props, lista : props.comentarios};
    return <Comentarios {...innerProps}/>
}

export default ComentariosComPropsAsLista;