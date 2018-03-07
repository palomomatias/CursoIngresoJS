function Mostrar()
{
    var precio1
    var precio2
    var precio3
    var suma
    var promedio
    precio1=document.getElementById("precioUno")
    precio2=document.getElementById("precioDos")
    precio3=document.getElementById("precioTres")
    precio1=parseInt(precio1)
    precio2=parseInt(precio2)
    precio3=parseInt(precio3)
    suma=(precio1+precio2+precio3)
    promedio=suma/3
    alert("la suma es"+(suma)+"el promedio es "+(promedio))

}
