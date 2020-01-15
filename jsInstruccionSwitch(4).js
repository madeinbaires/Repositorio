function mostrar()
{

var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){

case "Febrero":
 alert("Tiene 28 dias");
 break;

 case "Enero":
 case "Marzo":
 case   "Julio":
 case "Agosto":
 case "Octubre":
 case "Diciembre":
   alert ("Tiene 31 dias");
 break;
 
 case "Abril":
 case  "Mayo":
 case "Junio":
 case "Septiembre":
 case "Noviembre":
 alert ("Tiene 30 dias")

}


	



}
