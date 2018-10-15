/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { KeyboardAvoidingView, Dimensions, FlatList, ScrollView, Platform, StyleSheet, Text, View, Image } from 'react-native';
import Post from "./src/components/Post";
import InstaluraAPI from "./src/API/InstaLuraApiAPI";

const width = Dimensions.get("screen").width;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fotos: []
        }
    }

    componentDidMount() {
        InstaluraAPI
            .getAllFotos()
            .then(photos => this.setState({ fotos: photos }))
    }

    render() {

        return (
            <KeyboardAvoidingView behavior="padding" >
                <FlatList style={styles.container}
                    keyExtractor={foto => ("" + foto.id)}
                    data={this.state.fotos}
                    renderItem={({ item }) => {
                        return <Post foto={item} />
                    }}
                >
                </FlatList>
            </KeyboardAvoidingView>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    cabecalho: { margin: 10, flexDirection: "row", alignItems: "center" },
    fotousuario: { width: 40, height: 40, marginRight: 10, borderRadius: 20 }
})