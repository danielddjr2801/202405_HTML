function like(identificador){

    if(identificador == 1){
        var like = parseInt(document.querySelector("#numeros1").innerHTML);
        like++;
        document.querySelector("#numeros1").innerHTML = like + " like(s)";
    }

    if(identificador == 2){
        var like = parseInt(document.querySelector("#numeros2").innerHTML);
        like++;
        document.querySelector("#numeros2").innerHTML = like + " like(s)";
    }

    if(identificador == 3){
        var like = parseInt(document.querySelector("#numeros3").innerHTML);
        like++;
        document.querySelector("#numeros3").innerHTML = like + " like(s)";
    }
}

