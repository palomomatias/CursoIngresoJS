function Mostrar()
{
    var resultado
    var resultadofinal
    var largo; 
    var ancho;
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt (largo)
    ancho = parseInt (ancho)
    resultado=((largo*ancho)*2)
    resultadofinal=(resultado*3)
    alert (resultadofinal)
}
