import React, { Component } from 'react';
import { FlatList, StyleSheet, Platform } from 'react-native';
import Post from "./Post";
import InstaluraAPI from "../../API/InstaLuraApiAPI";
import comTecladoSeIOS from "../util/comTecladoSeIOS";

class Feed extends Component {

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

export default comTecladoSeIOS(Feed);

const isAndroid = Platform.OS == "android";
const styles = StyleSheet.create({
    container: {
        marginTop: isAndroid ? 0 : 20
    },
    cabecalho: { margin: 10, flexDirection: "row", alignItems: "center" },
    fotousuario: { width: 40, height: 40, marginRight: 10, borderRadius: 20 }
})