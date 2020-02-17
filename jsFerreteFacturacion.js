/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var precioUno;
    var precioDos;
    var preciotres;
    var resultado;
precioUno=parseInt(document.getElementById("PrecioUno").value);
precioDos=parseInt(document.getElementById("PrecioDos").value);
precioTres=parseInt(document.getElementById("PrecioTres").value);

resultado= precioUno+precioDos+precioTres;

alert(resultado);



	
}
function Promedio () 
{var precioUno;
    var precioDos;
    var preciotres;
    var resultado;
precioUno=parseInt(document.getElementById("PrecioUno").value);
precioDos=parseInt(document.getElementById("PrecioDos").value);
precioTres=parseInt(document.getElementById("PrecioTres").value);

resultado= (precioUno+precioDos+precioTres)/3;

alert(resultado);

	
}
function PrecioFinal () 
{
    
    
var precioUno;
var precioDos;
var preciotres;
var resultado;
var precioFinal;
precioUno=parseInt(document.getElementById("PrecioUno").value);
precioDos=parseInt(document.getElementById("PrecioDos").value);
precioTres=parseInt(document.getElementById("PrecioTres").value);

resultado= precioUno+precioDos+precioTres;
precioFinal= resultado+(resultado*0.21)

console.log (precioFinal);
alert(precioFinal);
}