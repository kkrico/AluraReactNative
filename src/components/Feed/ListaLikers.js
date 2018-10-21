import React from 'react';
import { Text } from 'react-native';
import styles from "../Styles";
import comApresentaNadaSeListaVazia from "../util/comApresentaNadaSeListaVazia";

const innerLikers = ({likers}) => {
    return <Text style={styles.curtidas}>{likers.length} {likers.length > 1 ? "curtidas" : "curtida"}</Text>
}

const Likers = comApresentaNadaSeListaVazia(innerLikers);

const LikersComPropsAsLista = (props) => {
    const innerProps = {...props, lista : props.likers};
    return <Likers {...innerProps}/>
}
export default LikersComPropsAsLista;