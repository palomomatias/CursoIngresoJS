/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var resultado2;
    var resultado1;
    var sueldo;
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseInt(sueldo);
    resultado1=(sueldo*10);
    resultado2=(resultado1/100);
    document.getElementById("resultado").value= resultado2;

}
