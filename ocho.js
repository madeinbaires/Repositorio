function mostrar()
{

    var nombre;
    var cantidadPersonas;
    var cantidadPersonasMaxima;
    var cantidadDias;
    var cantidadDiasMaxima;
    var formaPago;
    var respuesta;
    var contadorDeReservas ;
    var acumuladorDeDias;
    var promedioDias;
    var contadorQr;
    var contadorEfete;
    var contadorTarjeta;
    var formaDePagoMasUtilizada;
    

    acumuladorDeDias=0;
    contadorDeReservas=0;
    contadorQr=0;
    contadorEfete=0;
    contadorTarjeta=0;
    respuesta ="s";


    

   do{
 
    nombre= prompt("Ingrese nombre del huesped");

    while(!isNaN(nombre))
    {
        nombre= prompt("Ingrese nombre del huesped");
    }
    
    cantidadPersonas= prompt ("Ingrese cantidad de personas a alojarse");
    cantidadPersonas= parseInt(cantidadPersonas)
    
    while (isNaN(cantidadPersonas) || cantidadPersonas < 1) 
    {

    cantidadPersonas= prompt ("Debe ingresar un numero,reingrese");
    parseInt(cantidadPersonas);
    
}
    
    cantidadDias= prompt ("Ingrese cantidad de dias de estadia");
    parseInt(cantidadDias);
    
    while (isNaN (cantidadDias) && cantidadDias < 1)
    {
       cantidadDias = prompt("Debe ingresar un numero,reingrese");
       parseInt(cantidadDias);    
    }
    
    formaPago= prompt("Ingrese una forma de pago");
    
    while (!isNaN(formaPago) || formaPago!="efectivo" && formaPago!= "qr" && formaPago!="tarjeta")
    {
    
    formaPago= prompt ("Medio de pago incorrecto,debe ingresar efectivo /qr o tarjeta");
    
    }
    acumuladorDeDias=acumuladorDeDias+=cantidadDias;

    
    if (contadorDeReservas=1 && cantidadPersonas > cantidadPersonasMaxima)
    {
    cantidadPersonasMaxima=cantidadPersonas;
    cantidadDiasMaxima=cantidadDias;
    cantidadPersonas=nombre;
    }
    

    else if (cantidadDias > cantidadDiasMaxima)
    {
        cantidadDiasMaxima=cantidadDias;
        cantidadDias=cantidadPersonas;
    
    }

    switch(formaPago)
    {
        case "qr":
        contadorQr++;
        break;
        case "efectivo":
        contadorEfete++;
        break;
        default:
        contadorTarjeta++;
    }

    if(contadorEfete>contadorQr && contadorEfete > contadorTarjeta)
    {
     
        formaDePagoMasUtilzada="Efectivo";
   

    }
    else if ( contadorQr>contadorTarjeta && contadorQr>contadorEfete)
     {
        formaDePagoMasUtilizada="Qr";
     } 
     contadorDeReservas++;
     respuesta=prompt("desea continuar?");     
    }while(respuesta=="s");


promedioDias=acumuladorDeDias/contadorDeReservas;

    


    document.write("El huesped que trajo mas personas en una sola reserva es : "+nombre+"<br>");
    
    document.write ("La cantidad de personas que se quedaron mas dias son :"+cantidadPersonas+"<br>");
    
    document.write ("La forma de pago mas utilizada es : "+formaDePagoMasUtilizada+" <br>");
    
    document.write ("El promedio de cantidad de dias por reserva es : "+promedioDias+"<br>");
    
    }
