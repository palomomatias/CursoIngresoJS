//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var resultado
    var resultadofinal
    var largo;
    var ancho;
    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo)
    ancho = parseInt(ancho)
    resultado = ((largo * ancho) * 2)
    resultadofinal = (resultado * 6)
    alert(resultadofinal)
	
}

