/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var resultado;

largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;

resultado=(ancho*largo);

alert(resultado);


}
function Circulo () 
{
    var radio;

    radio=document.getElementById("Radio").value;

resultado=(Math.PI)*((radio)*(radio));

alert(resultado);
	
}
function Materiales () 
{
   var largo;
   var ancho;
   var totalMateriales;



largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;

resultado=(ancho*largo);

alert("Para un contrapiso de :"+largo+" metros de largo y: "+ancho+" metros de ancho,se necesitan: "+resultado*2+" bolsas de cemento y: "+resultado*3+" bolsas de cal ");

}