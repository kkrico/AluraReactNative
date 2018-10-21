import React from 'react';
import { KeyboardAvoidingView, Dimensions, FlatList, ScrollView, Platform, StyleSheet, Text, View, Image } from 'react-native';

const comTecladoSeAndroid = (Component) => {
    const isAndroid = Platform.OS == "android";

    return (props = {}) => {
        if (!isAndroid)
            return (<KeyboardAvoidingView behavior="padding">
                <Component {...props} />
            </KeyboardAvoidingView>);

        return <Component {...props} />
    }
}

export default comTecladoSeAndroid;