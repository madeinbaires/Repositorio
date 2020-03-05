/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/


var numeroSecreto;
var contadorIntentos;
var resultado;
contadorIntentos=0

  function comenzar()
  {
    numeroSecreto=Math.floor(Math.random()*(100-1))+1;
    numeroSecreto=parseInt(numeroSecreto);
  
 
  }


  function verificar()

  {
  
  var numero=document.getElementById('numero').value;
  numero=parseInt(numero);
  
contadorIntentos++;
if (isNaN(numero))
{
 alert ("Nota del juego: para que comiencen a correr los intentos debe ingresar un valor valido")

}

if (numero== numeroSecreto && contadorIntentos ==1)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Usted es un psqiuico")
}

if (numero== numeroSecreto && contadorIntentos ==2)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Excelente percepcion");
}


if (numero== numeroSecreto && contadorIntentos ==3)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Esto es suerte")
}

if (numero== numeroSecreto && contadorIntentos ==4)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Excelente tecnica")
}

if (numero== numeroSecreto && contadorIntentos ==5)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Usted esta en la media")
}
if (numero== numeroSecreto && (contadorIntentos >6 && contadorIntentos<10))
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Falta Tecnica")
}
if (numero== numeroSecreto && contadorIntentos >10)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
   alert("Afortunado en el amor!!!!")
}

else if  (numero > numeroSecreto)
{


   resultado=numero-numeroSecreto;
   alert("se paso "+resultado+" del numero secreto");

}
 else if  (numero < numeroSecreto){
  resultado=numeroSecreto-numero;
  alert("falta "+resultado+"para llegar al numero secreto")
}



document.getElementById("intentos").value=contadorIntentos;

 }