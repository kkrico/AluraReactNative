import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Text, View, Image } from 'react-native';
const width = Dimensions.get("screen").width;
import ListaComentarios from "./Comentarios";
import styles from "./Styles";
import InputComentario from './InputComentario';
import Likes from "./Likes";

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foto: this.props.foto,
        }
    }



    like(likeAtualizado) {

        let { likers } = this.state.foto;
        likeAtualizado ? likers.push({}) : likers.pop({});

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: likeAtualizado,
            likers
        }

        this.setState({ foto: fotoAtualizada });
    }

    carregaComentario(valorComentario, inputComentario) {
        if (valorComentario == "")
            return;

        const novaLista = [...this.state.foto.comentarios, {
            id: valorComentario,
            login: "Daniel Ramos",
            texto: valorComentario
        }]

        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista
        }

        this.setState({ foto: fotoAtualizada });
        inputComentario.clear();
    }

    render() {
        const { foto } = this.state;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.fotoDePerfil }}
                        style={styles.fotousuario} />
                    <Text>{foto.loginusuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }} style={{ width: width, height: width }} />
                <View style={styles.rodape}>
                    <Likes likeCallBack={this.like.bind(this)} {...foto} />
                    <ListaComentarios comentarios={foto.comentarios} />
                </View>
                <InputComentario comentarioCallBack={this.carregaComentario.bind(this)} />
            </View>

        )
    }
}