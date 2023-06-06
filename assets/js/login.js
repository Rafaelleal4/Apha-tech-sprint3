function pe(){
    let lo = (document.getElementById("login").value)
    let se = (document.getElementById("senha").value)
    if(lo == "admin" && se == 123){
    }
    else{
        document.getElementById("p").innerHTML="senha incorreta"
    }
}