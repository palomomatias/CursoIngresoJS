function Mostrar()
{
    var peso
    var mas
    var menos
    var bandera=true
 
    for(var contador=0;contador<6;contador++)
    {peso=parseInt(peso)
    peso=prompt("ingrese un numero")
    while(isNaN(peso)||peso<0)
    {
        
        peso=prompt("erroringrese un numero")
        peso=parseInt(peso)
        }

        if(bandera)
        {bandera=false
        mas=peso
        menos=peso}
        else {
            if(peso>mas)
            {
                mas=peso
            }
            else if (peso<menos)
            {
                menos=peso
            }
    }
    
    }

    alert("el peso mas grande es"+(mas)+"el menor peso es"+(menos))

}

