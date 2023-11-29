


let nombrePersona;

alert("Hola queres jugar con nosotros al Preguntados web")

nombrePersona = prompt("Ingresa tu nombre");

while (nombrePersona === "") {
  nombrePersona = prompt("Por favor, ingresa tu nombre");
}

console.log(`Bienvenido ${nombrePersona}`);

alert(`Bienvenido ${nombrePersona}, Podemos comenzar a jugar.`)



const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
  let respuesta = prompt(pregunta).toLowerCase();

  while (respuesta !== "no" && respuesta !== "si") {
    alert("Respuesta invalida debe contestar pro si o por no");
    respuesta = prompt(pregunta).toLowerCase();
  }

  if (respuesta === respuestaCorrecta) {
    alert("Respuesta correcta");
  } else {
    alert("Respuesta incorrecta");
  }
};



for (let i = 0; i <= 5; i++) {
let pregunta;
let respuestaCorrecta;

switch (i) {
  case 1:
    pregunta = "¿El ex cantante de los redondos se llama Gustavo Cerati?";
    respuestaCorrecta = "no";
    chequeoRespuesta(respuestaCorrecta, pregunta);
    break;
  case 2:
    pregunta = "¿Rosario Central entro a la copa Libertadores 2024?";
    respuestaCorrecta = "si";
    chequeoRespuesta(respuestaCorrecta, pregunta);
    break;
  case 3:
    pregunta = "¿El campeon del mundo en el mundial de Qatar 2022 fue Brasil?";
    respuestaCorrecta = "no";
    chequeoRespuesta(respuestaCorrecta, pregunta);
    break;
  case 4:
    pregunta = "¿La Capital de Argentina es Cordoba?";
    respuestaCorrecta = "no";
    chequeoRespuesta(respuestaCorrecta, pregunta);
    break;
  case 5:
    pregunta = "¿Nob gano el ultimo clasico con Rosario Central?";
    respuestaCorrecta = "no";
    chequeoRespuesta(respuestaCorrecta, pregunta);
    break;
  case 5:
    pregunta = "¿El tomate es una fruta?";
    respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
  default:
    alert("Recorda contestar por si o no")
    alert("*****Mucha suerte*****")
    break;

}
}

console.log(`Muchas gracias ${nombrePersona}, por participar`);

alert(`Muchas gracias ${nombrePersona}, lo esperamos para mas preguntas`)
