function Mostrar()
{
    var resultado2
    var resultado1;
    var sueldo 
    sueldo= prompt("","")
    sueldo=parseInt(sueldo)
    resultado1=((sueldo*25)/100);
    resultado2=(sueldo-resultado1)
    document.getElementById("importeFinal").value= resultado2;
}
