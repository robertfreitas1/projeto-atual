console.log (`Trabalhando com listas `)
// const salvador = `salvador `
// const SaoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array (
  `salvador ` ,
   `São Paulo`,
   `Rio de Janeiro` ,
)
listaDeDestinos.push(
    `Curitiba`
) //adicionando um item a minha lista com push

console.log("Destinos possíveis:")
console.log(listaDeDestinos)

listaDeDestinos.splice(
  1,1
)

console.log(listaDeDestinos)
    console.log(listaDeDestinos [1])