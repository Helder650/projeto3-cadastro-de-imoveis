let still = []
let options

let menu = still + "\n\nEscolha uma opção:\n" +
               "1 - Salvar novo Imóvel\n" +
               "2 - Listar Imóveis salvos\n" +
               "3 - Sair"

options = prompt(menu)

if (options === "1") {
    let owner = prompt("Digite o nome do proprietário:")
    let rooms = prompt("Digite a quantidade de quartos:")
    let bathrooms = prompt("Digite a quantidade de banheiros:")
    let hasGarage = confirm("O imóvel tem garagem?")

    if (confirm("Deseja salvar essas informações?")) {
        properties.push({ owner, rooms, bathrooms, garage: hasGarage ? "Sim" : "Não" })
        alert("Imóvel salvo")
    } else {
        alert("Informações não salvas.")
    }

} else if (options === "2") {
    if (still.length > 0) {
        alert("Carta puxada: " + deck.shift())
    } else {
        alert("Nenhuma carta no baralho.")
    }
}
 while (options !== "3")

alert("Sistema encerrado.")

        

    

