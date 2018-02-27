//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
	var multiplicacion
	var resta
	var suma
	var mostrar2
	var mostrar
	mostrar=prompt("ingrese un numero")
	mostrar=parseInt(mostrar)
	mostrar2=prompt("ingrese otro numero")
	mostrar2=parseInt(mostrar2)
	if(mostrar==mostrar2)
	{
		multiplicacion=mostrar*mostrar2
		document.write(multiplicacion)
	}
	else if (mostrar>mostrar2)
	{
		resta=mostrar-mostrar2
		document.write(resta)
	}
	else if (mostrar<mostrar2)
	{
		suma=mostrar+mostrar2
		document.write(suma)
	}

	
}

