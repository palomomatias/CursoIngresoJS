//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var resultadoFinal
	importe=prompt("ingrese un numero")
	importe=parseInt(importe)
	resultadoFinal=importe*1.21
	document.getElementById("importe").value=resultadoFinal
	
}

