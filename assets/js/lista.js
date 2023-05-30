

function enviar() {
    var inp1 = document.getElementById("title").value
    var inp2 = document.getElementById("calendar").value
    var inp3 = document.getElementById("descricao").value
    var inp4 = document.getElementById("dono").value

    if(inp1 == "" ||inp2 == "" ||inp3 == "" ||inp4 == ""){ 
    alert("Escreva algo!!!")}
    else{}

}


function remover() {
    document.getElementById("titulo").innerHTML = ""
    document.getElementById("date").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    document.getElementById("autor").innerHTML = ""
}