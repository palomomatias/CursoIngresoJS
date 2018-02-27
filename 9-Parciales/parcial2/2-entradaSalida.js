//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var importefinal
	importe=prompt("Ingrese un importe")
	importe=parseInt(importe)
	importefinal=importe*1.21
	document.getElementById("importe").value=importefinal

	
}

