
const valorEntrada = 200;

const descuentoEstudiante = 1.8; 
const descuentoTrainee = 1.5;
const descuentoJunior = 1.15;

const categoria = ["Estudiante", "Trainee","Junior"];

let nombre = document.getElementById("input-nombre").value;
let apellido = document.getElementById("input-apellido").value;
let email = document.getElementById("input-correo").value;
let cantidad = document.getElementById("cant").value;

function calcularPrecio(cat, cantidad){
    
    let total;

    if(cat == categoria[0])
    total = descuentoEstudiante*valorEntrada*cantidad;
    else if(cat == categoria[1])
    total = descuentoTrainee*valorEntrada*cantidad;
    else if(cat == categoria[2])
    total = descuentoJunior*valorEntrada*cantidad;
    
    return Math.round(total);
}

function muestraResultado(){
   
        let cant = document.getElementById("cant").value;
        let cat  = document.getElementById("categoria").value;
        let precioTotal = calcularPrecio(cat, cant);
        document.getElementById("resultado").value = "El monto a pagar es: $" + precioTotal;
}

function borrarContenido(){
    $("#btn-tickets-erase").click(function(){
        $("#input-nombre").val("");
        $("#input-apellido").val("");
        $("#input-email").val("");
        $("#cant").val("");
        $("#categoria").val($("#categoria option:nth-child(1)").val());
        $("#resultado").val("");
    });
}