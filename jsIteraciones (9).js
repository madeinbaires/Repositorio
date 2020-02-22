function mostrar()
{


var respuesta;
   var numero;
   var esPrimeraIteracion=true;
   var maximo;
   var minimo;

		
do
{
	numero=prompt ('Ingrese un numero');
	numero=parseInt(numero);
	
   while(isNaN(numero))
   {
	   numero=prompt('Error,ingrese un numero');
	   numero=parseInt(numero);
   }

   if (esPrimeraIteracion===true)
{
		   maximo=numero;
		   minimo=numero;
		   esPrimeraIteracion=false;
}
	else if (numero>maximo)
	{

		     maximo=numero;
	}
	else if (numero<minimo)
	{
		minimo=numero
	}
	   respuesta=confirm('Desea continuar?');
}while(respuesta);

	   document.getElementById("maximo").value=maximo;
	   document.getElementById("minimo").value=minimo;
}

