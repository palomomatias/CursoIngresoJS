//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
	mes=prompt("pone un mes","");
	switch(mes)
	{
		case"Febrero":
		case"Enero":
		case"enero":
		case"febrero":
		alert("veranito");
		break;
		case"marzo":
		case"abril":
		case"mayo":
		case"junio":
		case"julio":
		case"agosto":
		case"septiembre":
		case"octubre":
		case"noviembre":
		case"diciembre":
		alert("extraño enero y febrero");
		break;
		default:alert("esto no es un mes")
	}
	
	
}

