//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var perimetro
	var base
	base=document.getElementById("lado").value 
	base=parseInt(base)
	perimetro=base*3
	alert(+perimetro)
	
}

