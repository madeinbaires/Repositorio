function mostrar()
{
	 var numerosPositivos=0
	 var numerosNegativos=1
	 var respuesta;
	 var numero;
	 
	do{
    numero=prompt ('Ingrese un numero');
	
	while(isNaN(numero)){

		numero=prompt("Ingrese un numero");
	}
	numero=parseInt(numero);
	
	if (numero >  0)
	{
	
		numerosPositivos=numerosPositivos+numero;
	}

     	else
	{    
		numerosNegativos*=numero;
	}




	respuesta=prompt("Desea seguir ingresando numeros?");
	while(respuesta.toUpperCase()!="S" && respuesta.toUpperCase() !="N")
	{
		respuesta=prompt("error,ingrese S/N");

	}
	}while(respuesta=="S");
	
	document.getElementById('suma').value=numerosPositivos;
	document.getElementById('producto').value=numerosNegativos;
		}