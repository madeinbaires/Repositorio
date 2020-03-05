function mostrar()
{

     var nombre;
     var cantidadPersonas;
     var cantidadPersonasMaxima;
     var cantidadDias;
    var cantidadDiasMaxima;
     var formaPago;
     var formaPagoMasUtilizada;
     var promedioCantidadDeDias;
     var acumuladorDias;
     var contadorReservas;
     var respuesta;
     var contadorQr;
     var contadorEfete;
     var contadorTarjeta;
     var nombreMaximo;

     respuesta=true;
     contadorReservas=0;
    contadorQr=0;
    ContadorEfete=0;
    acumuladorDias=0;
    
    
    do{ 
        contadorReservas++;
        nombre=prompt("Ingrese nombre del huesped");

  while (!isNaN(nombre)){

    nombre=prompt("Ingrese nombre del huesped");

  }

  cantidadPersonas=prompt("Ingrese cantidad de personas");
  cantidadPersonas=parseInt(cantidadPersonas);
;

while (isNaN (cantidadPersonas) || cantidadPersonas < 0)
{

    cantidadPersonas=prompt("Ingrese cantidad de personas");
    cantidadPersonas=parseInt(cantidadPersonas);
}

  cantidadDias=prompt("Ingrese cantidad de dias de estadia");
  cantidadDias=parseInt(cantidadDias);

while (isNaN (cantidadDias) || cantidadDias < 1)
{
    cantidadDias=prompt("Ingrese cantidad de dias de estadia");
    cantidadDias=parseInt(cantidadDias);
}
 formaPago=prompt ("Ingrese una forma de pago: efectivo/tarjeta/Qr");


 while(!isNaN(formaPago) || (formaPago!="efectivo" && formaPago!= "qr" && formaPago!="tarjeta"))
{
     
 formaPago=prompt ("Medio de pago incorrecto,debe ingresar: efectivo/tarjeta/Qr");


 }
acumuladorDias+=cantidadDias;

if (contadorReservas = 1 &&  (cantidadPersonas>cantidadPersonasMaxima))
    {
    cantidadPersonasMaxima=cantidadPersonas;
    cantidadDiasMaxima=cantidadDias;
    cantidadPersonas=nombre;
    }
    else if (contadorReservas > 1 &&  (cantidadPersonas>cantidadPersonasMaxima))
    {
        cantidadPersonasMaxima=cantidadPersonas;
        cantidadPersonas=nombreMaximo;
        

    }




   

else if ((cantidadDias >  cantidadDiasMaxima) )
{
   cantidadDiasMaxima=cantidadDias;
   cantidadDias=cantidadPersonas;
   cantidadPersonas=nombreMaximo;

}
switch (formaPago){

case "Efectivo":
contadorEfete++;
break;

case "Qr":
    contadorQr++;
    break;
default:
    contadorTarjeta++;

}

if  (contadorEfete > contadorQr && contadorEfete> contadorTarjeta )
{
    formaPagoMasUtilizada="Efectivo";

}
else if  (contadorQr>contadorEfete && contadorQr> contadorQr)

{

  formaPagoMasUtilizada="Qr";

}
respuesta=confirm("¿Desea seguir ingresando reservas?");

 }while(respuesta==true)

 promedioCantidadDeDias=acumuladorDias/contadorReservas;

  document.write("El huesped que trajo mas personas en una reserva es: "+nombre+"<br>");
  document.write ("La cantidad de personas que se quedaron mas dias es: "+cantidadPersonas+"<br>");
document.write("La forma de pago mas utilizada es: "+formaPagoMasUtilizada+"<br>");
document.write("El promedio de la cantidad de dias por reserva es :"+promedioCantidadDeDias+"<br>");


}
