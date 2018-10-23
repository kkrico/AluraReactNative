import delay from "./delay";
const fotos = [
    { comentarios: [{ login: "maria.antonia", texto: "Legal" }], likers: [{}, {}], likeada: false, id: 1, fotoDePerfil: "https://picsum.photos/100/100/?image=817", loginusuario: "Daniel Ramos", urlFoto: "https://picsum.photos/500/500/?random" },
    { comentarios: [], likers: [], likeada: false, id: 2, fotoDePerfil: "https://picsum.photos/100/100/?image=56", loginusuario: "Antonio Carlos", urlFoto: "https://picsum.photos/500/500/?image=84" },
    { comentarios: [], likers: [{}], likeada: true, id: 3, fotoDePerfil: "https://picsum.photos/100/100/?image=892", loginusuario: "José da Silva", urlFoto: "https://picsum.photos/500/500/?image=999" },
    { comentarios: [], likers: [], likeada: false, id: 2, fotoDePerfil: "https://picsum.photos/100/100/?image=56", loginusuario: "Antonio Carlos", urlFoto: "https://picsum.photos/500/500/?image=1001" },
    { comentarios: [], likers: [], likeada: false, id: 3, fotoDePerfil: "https://picsum.photos/100/100/?image=892", loginusuario: "José da Silva", urlFoto: "https://picsum.photos/500/500/?image=1002" },
]

class InstaLuraApiAPI {
    static getAllFotos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], fotos));
            }, delay);
        });
    }

    static login(usuario, senha) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuarioRegistrado = "daniel.ramos";
                const senhaRegistrada = "123456";
                if (usuario == usuarioRegistrado && senha == senhaRegistrada)
                    resolve({ ok: true, text: () => "JWT_TOKEN_DEMO" })
                else
                    resolve({ ok: false })
            }, delay);
        })
    }
}


export default InstaLuraApiAPI