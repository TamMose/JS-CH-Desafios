//FORMULARIO PARA SABER SI DEBES O NO REGISTRARTE PARA LA 4TA DOSIS SEGUN TU CONDICION

//Paso 1: saludar
//Paso 2: preguntar si el usuario tiene la 3ra dosis
//Paso 3: preguntar si el usuario tiene alguna de las condiciones definidas
//Paso 4: dependiendo la opcion se le alerta una respuesta


alert("Bienvenido al formulario de vacunacion para la 4ta dosis");

let saludar = (prompt("Te aplicastes la tercer dosis?, \n (1) si \n (2) no" ))

if ( saludar === 1) {
    alert ("Usted puede aplicarse la 4ta dosis")
}else{ ( saludar === 2)
    alert("Usted debe aplicarse la 3ra dosis, eso es otro formulario");
}

let pregunta = alert("Usted tiene alguna de siguientes condiciones? ");
let condicion;

while( condicion !== "NINGUNA"){
    condicion = (prompt("Usted tiene alguna de siguientes condiciones? \n \n INGRESE OPCION NUMERICA: \n \n (1)  Enfermedades cardiacas \n (2) Diabetes \n (3) Obesidad con IMC ≥30 \n (4) Embarazo \n (5) Enfermedades respiratorias crónicas \n (6) Enfermedad renal crónica \n \n NINGUNA"));
if (condicion == 1){
    alert("Usted es considerada persona de riesgo, no precisa registracion previa, puede acercarse al area de vacunacion mas cercana  ")
}else if (condicion == 2){
    alert("Usted es considerada persona de riesgo, no precisa registracion previa, puede acercarse al area de vacunacion mas cercana  ")
}else if (condicion == 3){
    alert("Usted debera sacar turno para recibir la 4ta dosis, tendra prioridad y recibira su turno para los proximos dias")
}else if (condicion == 4){
    alert("Usted debera sacar turno para recibir la 4ta dosis, tendra prioridad y recibira su turno para los proximos dias")
}else if (condicion == 5){
    alert("Usted es considerada persona de riesgo, no precisa registracion previa, puede acercarse al area de vacunacion mas cercana  ")

}else if (condicion == 4){
    alert("Usted debera sacar turno para recibir la 4ta dosis, tendra prioridad y recibira su turno para los proximos dias")
}else if
    (condicion === "NINGUNA"){
        alert("Usted debera registrarse para sacar turno para la 4ta dosis ")
    }
    else{
        alert("Por favor responda con alguna opcion o con la palabra NINGUNA")
    }
}