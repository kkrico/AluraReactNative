import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    curtidas: {
        fontWeight: "bold",
        marginTop: 10
    },
    cabecalho: {
        margin: 10, flexDirection: "row", alignItems: "center"
    },
    fotousuario: {
        width: 40, height: 40, marginRight: 10, borderRadius: 20,
    },
    botaoLike: {
        height: 40,
        width: 40,
    },
    rodape: {
        margin: 10
    },
    comentario: {
        flexDirection: "row"
    },
    loginusuario: {
        fontWeight: "bold"
    },
    input: {
        flex: 1,
        height: 40,
    },
    botaoEnviar: {
        width: 30,
        height: 30
    },
    novoComentario: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})


export default styles;