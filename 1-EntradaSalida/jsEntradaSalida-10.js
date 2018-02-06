/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var porcentaje
    var resultado2;
    var resultado1;
    var sueldo= parseInt(document.getElementById("importe").value);
    resultado1=(sueldo*25);
    resultado2=(resultado1/100);
    porcentaje=(sueldo-resultado2)
    document.getElementById("resultado").value= porcentaje
}
