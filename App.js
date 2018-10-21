import React, { Component } from 'react';
import { KeyboardAvoidingView, Dimensions, FlatList, ScrollView, Platform, StyleSheet, Text, View, Image } from 'react-native';
import Post from "./src/components/Post";
import InstaluraAPI from "./src/API/InstaLuraApiAPI";
import comTecladoSeIOS from "./src/components/util/comTecladoSeIOS";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fotos: []
        }
    }

    componentDidMount() {
        InstaluraAPI
            .getAllFotos()
            .then(fotos => this.setState({ fotos: fotos }))
    }

    render() {
        return (
            <FlatList style={styles.container}
                keyboardShouldPersistTaps={"handled"}
                keyExtractor={foto => ("" + foto.id)}
                data={this.state.fotos}
                renderItem={({ item }) => {
                    return <Post foto={item} />
                }}
            >
            </FlatList>
        )
    }
}

export default comTecladoSeIOS(App);

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    cabecalho: { margin: 10, flexDirection: "row", alignItems: "center" },
    fotousuario: { width: 40, height: 40, marginRight: 10, borderRadius: 20 }
})