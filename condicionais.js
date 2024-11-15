console.log(`Trabalhando com listas `)
// const salvador = `salvador `
// const SaoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `salvador `,
    `São Paulo`,
    `Rio de Janeiro`,
)


const idadeComprador = 18
const estaAcompanhada = true

console.log("Destinos possíveis:")
console.log(listaDeDestinos)

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade ")
    listaDeDestinos.splice(1, 1)
}
else {
    //A pessoa é menor de idade
    if (estaAcompanhada)

        console.log("Comprador está acompamhada ")

    listaDeDestinos.splice(
        1, 1
    )

    console.log("Menor de idade ")
    

}





console.log(listaDeDestinos)
console.log(listaDeDestinos[1])