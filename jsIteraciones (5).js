function mostrar()
{

var sexo = prompt("ingrese f ó m .");

<<<<<<< HEAD

while (sexo.toLowerCase()!="f" && sexo.toLowerCase()!="m"){

sexo = prompt("Error,reingrese.");
}


document.getElementById('Sexo').value=sexo;

}
=======
while (sexo !="f" && sexo !="m"){

    sexo=prompt("Ingrese un sexo valido");
}
document.getElementById('Sexo').value=sexo;
}
>>>>>>> b8806d1f94a30511c5cee42d7ecce159b34d16fb
