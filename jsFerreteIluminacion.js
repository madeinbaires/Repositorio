/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 var cantidad;
 var marca;
 var descuento;
 var descuentoTotal;
 var descuentoFinal;
 var importeFinal;
 var ingresoBruto;
 var precio=35;
 var precioFinal;
 
 
 

 cantidad=document.getElementById("Cantidad").value;
 cantidad=parseInt(cantidad);
 marca=document.getElementById("Marca").value;
 
 

 if (cantidad>=6){
     descuento= 0.5;
}
else if(cantidad==5 && marca=="ArgentinaLuz"){
        descuento=0.4;
}


else if (cantidad==5){
    descuento=0.3;
}

else if(cantidad==4 && marca=="ArgentinaLuz" || marca=="felipeLamparas"){
   descuento=0.25;
}
else if(cantidad==4){
    descuento=0.2;
}
else if(cantidad==3 && marca=="ArgentinaLuz"){
    descuento=0.15;

}else if(cantidad==3 && marca=="FelipeLamparas"){
    descuento=0.10;

    
}else if(cantidad==3){
     descuento=0.05;

}

importeFinal=(cantidad*precio)


descuentoFinal= (importeFinal*descuento);
precioFinal= (importeFinal-descuentoFinal);





if (precioFinal>=120){

ingresoBruto= precioFinal*0.1;


importeFinal= precioFinal+ingresoBruto;
document.getElementById("precioDescuento").value=precioFinal;

alert("Usted pago: "+ingresoBruto+" de IIBB");




}
document.getElementById("precioDescuento").value=precioFinal;
console.log(descuentoFinal);
console.log(precioFinal);
console.log(descuento)
}






