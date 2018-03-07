function Mostrar()
{
    var numero1
    var numero2
    var suma
    var positivo
    var negativo
    var igualdad
    numero1=prompt("ingre se un numero")
    numero1=parseInt(numero1)
    numero2=prompt("ingrese otro numero")
    numero2=parseInt(numero2)
    suma=numero1+numero2
    if(suma>0)
    {
        
        document.write("positivo")

    }
    else if(suma<0)
    {
        document.write("negativo")
    }
    else if(suma==0)
    document.write("cero")
  

}
