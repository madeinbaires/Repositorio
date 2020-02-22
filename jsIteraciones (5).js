function mostrar()
{

var sexo = prompt("ingrese f ó m .");


while (sexo.toLowerCase()!="f" && sexo.toLowerCase()!="m"){

sexo = prompt("Error,reingrese.");
}


document.getElementById('Sexo').value=sexo;

}