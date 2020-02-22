function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

//Como no tengo un espacio para ingresar el numero,lo pido por prompt.

while(contador < 5){   	

numero = prompt ("Ingrese un numero");
 numero=parseInt(numero);
 acumulador = acumulador + numero;
 contador++

}
//Los promedios y los porcentajes se calculan afuera del while.





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN