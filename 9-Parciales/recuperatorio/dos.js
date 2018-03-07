function Mostrar()
{
var importe
var total
var totalfinal
importe=prompt("ingrese su importe")
importe=parseInt(importe)
total=((importe*25)/100)
totalfinal=importe-total
document.getElementById("importeFinal").value=totalfinal
}
