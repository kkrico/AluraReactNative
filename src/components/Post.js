import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Text, View, Image } from 'react-native';
const width = Dimensions.get("screen").width;
import ListaComentarios from "./Comentarios";
import Likers from "./Likers";
import styles from "./Styles";
import InputComentario from './InputComentario';

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foto: this.props.foto,
        }
    }

    carregaIcone(likeada) {
        return likeada ? require("../../resources/img/s2-checked.png") : require("../../resources/img/s2.png")
    }

    like() {
        const likeAtualizado = !this.state.foto.likeada;
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
                    <TouchableOpacity onPress={this.like.bind(this, foto.likeada)}>
                        <Image style={styles.botaoLike} source={this.carregaIcone(foto.likeada)} />
                    </TouchableOpacity>
                    <Likers likers={foto.likers}></Likers>
                    <ListaComentarios comentarios={foto.comentarios} />
                </View>
                <InputComentario comentarioCallBack={this.carregaComentario.bind(this)} />
            </View>

        )
    }
}