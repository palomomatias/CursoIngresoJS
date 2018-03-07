//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var alambre
	var perimetro
	var largo
	var ancho
	largo=document.getElementById("largo").value
	ancho=document.getElementById("ancho").value
	largo=parseInt(largo)
	ancho=parseInt(ancho)
	perimetro=((largo+ancho)*2)
	alambre=perimetro*6
	alert(alambre)

	
}

