var autos = [];
var button = document.getElementById("button");

function Auto(marca,precio) {
    this.marca = marca;
    this.precio = precio;
};

button.addEventListener("click", agregarAutoBoton);

function agregarAutoBoton() {
    var marcaAuto = document.getElementById("marcaauto").value;
    var precioAuto = document.getElementById("precioauto").value;
    var auto = new Auto(marcaAuto, precioAuto);

    autos.push(auto);

    calcularEstadisticas()
    agregarAutosCargados(auto)
}

function agregarAutosCargados(auto){
    document.getElementById("autoscargados").innerHTML += "<p class=\"marcaAuto\">" + auto.marca + "</p><p class=\"precioAuto\">Precio: $" + auto.precio + "</p>"
}

function calcularEstadisticas () {
    document.getElementById("totaldeauto").innerHTML = totalDeAutos();
    document.getElementById("preciototalenautos").innerHTML = precioTotalEnAutos();
    document.getElementById("automascaro").innerHTML = autoMasCaro();
    document.getElementById("automaseconomico").innerHTML = autoMasEconomico();
}

function precioTotalEnAutos(){
    var total = 0;

    autos.forEach( function(autos) {
        total += parseInt(autos.precio);
    });

    return total;
}

function autoMasCaro(){
    var auto = [];
    auto[0] = autos[0];

    autos.forEach(function(elemento){
        if (elemento.precio > auto[0].precio)
        {
            auto[0] = elemento;
        }
    });

    return auto[0].marca + " ($" + auto[0].precio + ")"
}

function autoMasEconomico(){
    var auto = [];
    auto[0] = autos[0];

    autos.forEach(function(elemento){
        if (elemento.precio < auto[0].precio)
        {
            auto[0] = elemento;
        }
    });

    return auto[0].marca + " ($" + auto[0].precio + ")"
}

function totalDeAutos(){
    return autos.length;
}