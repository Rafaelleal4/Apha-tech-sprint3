

function enviar() {
    var inp1 = document.getElementById("title").value;
    var inp2 = document.getElementById("calendar").value;
    var inp3 = document.getElementById("descricao").value;
    var inp4 = document.getElementById("dono").value;
    if(inp1 == "" ||inp2 == "" ||inp3 == "" ||inp4 == ""){ 
        alert("Escreva algo!!!")
        return;
    }


    var armaz = document.getElementById("armaz")
    var list = `<div id="lists">` + `<h1 id="titu_list">Titulo: ` + inp1 +`</h1>` + `<h3>Data: ` + inp2 + `</h3>` + `<h3>Descrição: ` + inp3 + `</h3>` + `<h3>Autor: ` + inp4 + `</h3>` + `</div>`

    armaz.innerHTML += list

    document.getElementById("titulo").innerHTML = ""
    document.getElementById("date").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    document.getElementById("autor").innerHTML = ""

    

}


function remover() {
    document.getElementById("titulo").innerHTML = ""
    document.getElementById("date").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    document.getElementById("autor").innerHTML = ""
}