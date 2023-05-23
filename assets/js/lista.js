var armaz = []

function enviar(){
let inp1 = document.getElementById("title").value
let inp2 = document.getElementById("calendar").value
let inp3 = document.getElementById("descricao").value
let inp4 = document.getElementById("dono").value

armaz.push(inp1)
armaz.push(inp2)
armaz.push(inp3)
armaz.push(inp4)


document.getElementById("titulo").innerHTML = ` ${armaz[0]}`
document.getElementById("date").innerHTML = `Data de publicação: ${armaz[1]}`
document.getElementById("description").innerHTML = `Descrição: ${armaz[2]}`
document.getElementById("autor").innerHTML = `Autor: ${armaz[3]}`
document.getElementById("remover").innerHTML = "Remover"

}
function remover(){
document.getElementById("titulo").innerHTML = ""
document.getElementById("date").innerHTML = ""
document.getElementById("description").innerHTML = ""
document.getElementById("autor").innerHTML = ""
}