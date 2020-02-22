function mostrar()
{

	var numero;
	numero= prompt("ingrese un número entre 0 y 9 inclusive.");

  while (!(numero >=0 && numero <10)){
	
	numero=prompt("Error,reingrese")
  }

  document.getElementById("Numero").value=numero;

}


