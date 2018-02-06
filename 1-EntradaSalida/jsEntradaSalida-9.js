/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var resultado2
    var resultado1;
    var sueldo= parseInt(document.getElementById("sueldo").value);
    resultado1=((sueldo*10)/100);
    resultado2=(sueldo+resultado1)
    document.getElementById("resultado").value= resultado2;

}
 