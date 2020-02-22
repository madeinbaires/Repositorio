function mostrar()
{
<<<<<<< HEAD

	var numero;
	numero= prompt("ingrese un número entre 0 y 9 inclusive.");

  while (!(numero >=0 && numero <10)){
	
	numero=prompt("Error,reingrese")
  }

  document.getElementById("Numero").value=numero;

=======
    var contador=0;
	var numero = prompt("ingrese un número entre 0 y 9 inclusive.");
	

	while (numero<0 && numero>9 || isNaN(numero)){

		prompt("Ingrese un numero valido!");
		  numero=parseInt(numero);
		  
		
}
document.getElementById("Numero")=numero;
>>>>>>> b8806d1f94a30511c5cee42d7ecce159b34d16fb
}


