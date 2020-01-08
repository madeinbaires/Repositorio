/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;

    nombre=document.getElementById("elNombre").value;
    edad=document.getElementById("laEdad").value;
    
  // console.log("Usted se llama: "+nombre+" y tiene: "+edad+"");
  // console.info("Usted se llama: "+nombre+" y tiene: "+edad+"");otra opcion al console.log;
   alert("Usted se llama: "+nombre+" y tiene: "+edad+" años")
    



}

