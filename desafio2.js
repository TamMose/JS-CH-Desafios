//FORMULARIO PARA SABER SI  DEBES O NO REGISTRARTE PARA LA 4TA DOSIS SEGUN TU CONDICION Y RANGO DE EDAD

//Paso 1: saludar
//Paso 2: preguntar edad
//Paso 3: preguntar si el usuario tiene la 3ra dosis
//Paso 4: preguntar si el usuario tiene alguna de las condiciones definidas
//Paso 5: dependiendo la opcion se le alerta una respuesta



function ingresarDatos() {
    nombre = prompt("Ingrese su nombre por favor");
    apellido = prompt("Ingrese su apellido por favor");
    barrio = prompt("Ingrese su barrio");
    alert(`Bienvenido ${nombre} ${apellido}, este es formulario de vacunacion para la 4ta dosis `);

}

ingresarDatos()


let edad = prompt('¿Qué edad tienes?');

function edadIngresada(edad) {
    
        if (edad >= 30 && edad < 55) {
            alert('Usted esta dentro de la edad requerida para vacunarse'); 
        } else {
                alert('Lo sentimos, actualmente estamos vacunando a un rango de edad especifica, vuelva a intentar en los proximos dias');

        }}

edadIngresada(edad);



function dosis(){

let preguntarDosis = (prompt("Te aplicastes la tercer dosis?, \n (1) si \n (2) no" ))

if ( preguntarDosis === 1) {
    alert ("Usted puede aplicarse la 4ta dosis")
}else{ ( preguntarDosis === 2)
    alert("Usted debe aplicarse la 3ra dosis, eso es otro formulario");
}}

dosis()

let pregunta = alert("Para poder proporcionarle mas informacion, por favor responda la proxima pregunta");
let condicion;

while( condicion !== "NINGUNA"){
    condicion = (prompt("Usted tiene alguna de siguientes condiciones? \n \n INGRESE OPCION NUMERICA: \n \n (1)  Enfermedades cardiacas \n (2) Diabetes \n (3) Obesidad con IMC ≥30 \n (4) Embarazo \n (5) Enfermedades respiratorias crónicas \n (6) Enfermedad renal crónica \n \n NINGUNA"));
if (condicion == 1 || condicion == 2 || condicion == 5){
    alert("Usted es considerada persona de riesgo, no precisa registracion previa, puede acercarse al area de vacunacion mas cercana  ")
}else if (condicion == 3 || condicion == 4 || condicion == 6){
    alert("Usted debera sacar turno para recibir la 4ta dosis, tendra prioridad y recibira su turno para los proximos dias")
}else if
    (condicion === "NINGUNA"){
        alert("Usted debera registrarse para sacar turno para la 4ta dosis ")
    }
    else{
        alert("Por favor responda con alguna opcion o con la palabra NINGUNA")
    }
}






