

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
if (numero== numeroSecreto)
{
   alert ("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
}
else if  (numero > numeroSecreto){


   resultado=numero-numeroSecreto;
   alert("se paso "+resultado+" del numero secreto");
 }
 else if  (numero < numeroSecreto){
  resultado=numeroSecreto-numero;
  alert("falta "+resultado+"para llegar al numero secreto")
}


document.getElementById("intentos").value=contadorIntentos;

 }