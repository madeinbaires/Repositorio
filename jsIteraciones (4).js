function mostrar()
{
    var contador=0;
	var numero = prompt("ingrese un número entre 0 y 9 inclusive.");
	

	while (numero<0 && numero>9 || isNaN(numero)){

		prompt("Ingrese un numero valido!");
		  numero=parseInt(numero);
		  
		
}
document.getElementById("Numero")=numero;
}


