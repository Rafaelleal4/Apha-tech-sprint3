var divcount = 0;

function enviar() {
    var title = document.getElementById('title').value;
    var date = document.getElementById('date').value;
    var datacorreta = date.split("-");
    var datainvert = datacorreta.reverse().join("/");
    var description = document.getElementById('description').value;
    var name = document.getElementById('name').value;

    if (title == "" || date == "" || description == "" || name == "") {
        alert("Escreva algo!!!")
        return;
    }
    var armaz = document.getElementById('armaz');
    var list = '<div class="newList" id="newList2' + divcount + '">' + '<h2>Titulo: ' + title + '</h2>' + '<hr>' + '<p>Data: ' + datainvert + '</p>' + '<hr>' + '<p>Descrição: ' + description + '</p>' + '<hr>' + '<p>Autor: ' + name + '</p>' + '<hr>' + '<button id="remover" onclick="remover(' + divcount + ')">Remover</button>' + '</div>';

    armaz.innerHTML += list;

    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('name').value = '';

    divcount++;
}

function remover(pao) {
    var list = document.getElementById('newList2' + pao);
    list.style.display = 'none';
}