import delay from "./delay";
const fotos = [
    { comentarios: [{ login: "maria.antonia", texto: "Legal" }], likers: [{}, {}], likeada: false, id: 1, fotoDePerfil: "https://picsum.photos/100/100/?image=817", loginusuario: "Daniel Ramos", urlFoto: "https://picsum.photos/500/500/?random" },
    { comentarios: [], likers: [], likeada: false, id: 2, fotoDePerfil: "https://picsum.photos/100/100/?image=57", loginusuario: "Antonio Carlos", urlFoto: "https://picsum.photos/500/500/?image=85" },
    { comentarios: [], likers: [], likeada: false, id: 3, fotoDePerfil: "https://picsum.photos/100/100/?image=892", loginusuario: "José da Silva", urlFoto: "https://picsum.photos/500/500/?image=1003" },
]

class InstaLuraApiAPI {
    static getAllFotos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], fotos));
            }, delay);
        });
    }
}


export default InstaLuraApiAPI