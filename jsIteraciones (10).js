function mostrar()
{

	var numero;
	var respuesta;
	var cantidadPositivos=0;
	var sumadorPositivos=0;
	var numerosNegativos=1;
	var sumadorNegativos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var cantidadImpares=0;
	var promedioPositivos;
	var promedioNegativos;
	 var resta;
	 


do{
numero=prompt("Ingrese un numero");
numero=parseInt(numero);

while (isNaN(numero)){

	numero=prompt("Debe ingresar un numero");
	numero=parseInt(numero);
}
if(numero!=0){
if (numero>=0){
	sumadorPositivos+=numero;
	cantidadPositivos++;
}
else{
   sumadorNegativos+=numero;
   cantidadNegativos++;

}

if (numero%2 =="0"){

	cantidadPares++
}
else{
	cantidadImpares++;
}
}
else {
	cantidadCeros++;
}
    respuesta=confirm('Desea continuar?');
}while(respuesta);
 resta=(cantidadPositivos-cantidadNegativos);
 promedioPositivos=sumadorPositivos/cantidadPositivos;
 promedioNegativos=sumadorNegativos/cantidadNegativos;

 document.write("La suma de los numeros negativos es: "+sumadorNegativos+"<br>");
document.write("La cantidad de numeros positivos es : "+cantidadPositivos+"<br>");
document.write("La cantidad de numeros negativos es: "+cantidadNegativos+"<br>");
document.write("La cantidad de ceros es: "+cantidadCeros+"<br>");
document.write("La cantidad de numeros pares es : "+cantidadPares+"<br>");
document.write("La cantidad de numeros impares es : "+cantidadImpares+"<br>");
document.write("El promedio de los numeros positivos es : "+cantidadPositivos+"<br>");
document.write("El promedio de los numeros negativos es : "+promedioNegativos+"<br>");
document.write("La diferencia entre numeros positivos y negativos es : "+resta+"<br>");



}