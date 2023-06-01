var global = [];
var olhodedeus = [];
var info = [];
var inp1;
var inp2;
var inp3;
var inp4;

function atualizar() {
    inp1 = document.getElementById("title").value;
    inp2 = document.getElementById("calendar").value;
    inp3 = document.getElementById("descricao").value;
    inp4 = document.getElementById("dono").value;

    info.push(inp1)
    info.push(inp2)
    info.push(inp3)
    info.push(inp4)
    global.push(info)
    for (let i = 0; i < global.length; i++) {

        const olhodedeus = global[i]
        var armz = document.getElementById("armz");
        var msg = `<h1 id="titu">Titulo: ${olhodedeus[0]}</h1>
        <h3 id="cal">Data: ${olhodedeus[1]}</h3>
        <h3 id="des">Descrição: ${olhodedeus[2]}</h3>
        <h3 id="auto">Autor: ${olhodedeus[3]}</h3>`
    }

    armz.innerHTML += msg
    
    document.getElementById("title").value = '';
    document.getElementById("calendar").value = '';
    document.getElementById("descricao").value = '';
    document.getElementById("dono").value = '';
}

function enviar() {
    if (inp1 == "" || inp2 == "" || inp3 == "" || inp4 == "") {
        alert("Escreva algo!!!")
        return;
    }
    atualizar()
}

