function mostrar()
{   
	var contador = 0;
	var flag=true ;
	var numero;
	var maximo;
	var minimo;
	var respuesta=true;
	
	while(respuesta==true)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero); 
		
		
     while ( isNaN(numero) || (numero < 1 || numero > 10))
   {
      numero= prompt ("Reingrese un numero");
      numero= parseInt(numero); 

       
  }
	


  if (flag==true)
  {
	  maximo=numero;
 	  minimo=numero;
        
  }
  else{
      if (flag ==true || numero >maximo){
			maximo = numero;

	  }
	  else if (flag ==true || numero < minimo){

           minimo=numero;		
	  }

  }
  flag=false;
  

respuesta= confirm("Desea ingresar otro numero");//Se puede usar prompt por SI/NO;
contador++	
}
 document.getElementById('maximo').value = maximo;
 document.getElementById('minimo').value = minimo;

 }



   
		


   
	
   





