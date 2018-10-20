import styles from "./Styles";
import ListaLikers from "./ListaLikers";
import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

const Likes = ({ likeada, likers, likeCallBack }) => {
    return <View>
        <TouchableOpacity onPress={() => {
            likeCallBack(!likeada)
        }}>
            <Image style={styles.botaoLike} source={carregaIcone(likeada)} />
        </TouchableOpacity>
        <ListaLikers likers={likers}></ListaLikers>
    </View>
}

const carregaIcone = (likeada) => {
    return likeada ? require("../../resources/img/s2-checked.png") : require("../../resources/img/s2.png")
}

export default Likes;