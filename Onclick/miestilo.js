function iniciarSesion() {

    document.getElementById("iniciar-sesion").innerHTML = "Cerrar Sesion";
}

function agregar() {

    var clear = document.getElementById("clear");
    clear.style.display = "none";
}

function like() {
    alert("Gato Altigrado" + " was liked");

    var aumentar = document.getElementById("aumento");
    var valorActual = parseInt(aumentar.innerHTML);
    aumentar.innerHTML = valorActual + 1 + " me gusta";
}

function aumento() {
    alert("Golden Retriever" +  "was liked");

    var incrementar = document.getElementById("incrementar");
    var valorActual = parseInt(incrementar.innerHTML);
    incrementar.innerHTML = valorActual + 1 + " me gusta";
}












