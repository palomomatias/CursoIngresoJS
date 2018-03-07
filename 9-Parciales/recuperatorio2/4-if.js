//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1
	var numero2
	var multiplicacion,resta,suma
	numero1=prompt("ingrese un numero")
	numero2=prompt("ingrese otro numero")
	numero1=parseInt(numero1)
	numero2=parseInt(numero2)
	if (numero1==numero2) {
		multiplicacion=numero1*numero2
		document.write(multiplicacion)
		
	} else if(numero1>numero2)
	{resta=numero1-numero2 
		document.write(resta)
	}
	else if (numero1<numero2)
	{
		suma=numero1+numero2
		document.write(suma)
	}
	
}


