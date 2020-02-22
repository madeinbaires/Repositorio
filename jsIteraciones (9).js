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
  

respuesta= confirm("Desea ingresar otro numero");
contador++	
}
 document.getElementById('maximo').value = maximo;
 document.getElementById('minimo').value = minimo;

 }



   
		


   
	
   





