

   function mostrar()
   {
       var edad;
       var estadoCivil;
   
       edad=document.getElementById("edad").value;
       estadoCivil=document.getElementById("estadoCivil").value;
   
       if (estadoCivil == "Soltero" && edad>17 )
   {
   
       alert ("Es soltero y no es menor");
   }
   
   
   } 
    
    
    
    //Al ingresar una edad menor a 18 años y un estado civil distinto a "Soro", NO HACER NADA, pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'