/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad
    var sexo
    var nacionalidad
    var EstadoCivil
    var sueldo
    var legajo
    var sueldoMaxNacionalizados=0
    var sueldoMaxFemeninoArgentinos=0
    var sumarF=0
    var sumarM=0
    var sueldoPromedioMasculino
    var sueldoPromedioFemenino
    var sueldoPromedioTotalFyM
    var contadorM=0
    var contadorF=0
    //hago el for
    for(var i=1;i<=4;i++)
    {
 //pido edad
    edad=prompt("Ingrese su edad");
    edad=parseInt(edad);
    while(isNaN(edad)|| edad<18||edad>90)
    {
        edad=prompt("ingrese su edad")
        edad=parseInt(edad)
    }   
    document.getElementById("Edad").value=edad
 //pido sexo
    sexo=prompt("ingrese F o M")
    while(sexo!="f"&&sexo!="m")
    {
        alert("error ingrsese F o M")
        sexo=prompt("Infrese F o M")
        if(sexo==null)
        {
            sexo=prompt("ingrese f o m")
            ;break
        }
        }
     if(sexo=="f")
        {
            sexo="femenino"
            document.getElementById("Sexo").value=sexo
        }
        else if (sexo=="m")
        {
            sexo="masculino"
            document.getElementById("Sexo").value=sexo
        }
    //pido estado civil
        estadocivil=prompt("1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
        estadocivil=parseInt(estadocivil)
        while(isNaN(estadocivil)||estadocivil<1||estadocivil>9)
        {
            estadocivil=prompt("1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
            estadocivil=parseInt(estadocivil)
        }
        if(estadocivil==1)
        {
            estadocivil="soltero"
            document.getElementById("EstadoCivil").value=estadocivil
        }
        else if(estadocivil==2)
        {
            estadocivil="casado"
            document.getElementById("EstadoCivil").value=estadocivil
        }
        else if(estadocivil==3)
        {
            estadocivil="divorciado"
            document.getElementById("EstadoCivil").value=estadocivil
        }
        else if(estadocivil==4)
        {
            estadocivil="viudo"
            document.getElementById("EstadoCivil").value=estadocivil
        }
    //pido sueldo
        sueldo=prompt("ingrese su sueldo no menor a 8000")
        sueldo=parseInt(sueldo)
         while(isNaN(sueldo)|| sueldo<8000)
         {
             sueldo=prompt("ingrese su sueldo no menor a 8000")
             sueldo=parseInt(sueldo)
         }
         document.getElementById("Sueldo").value=sueldo
   //pidop legajo    
         legajo=prompt("Ingrese su numero de legajo");
         legajo=parseInt(legajo);
            while(isNaN(legajo)|| legajo>9999||legajo<1000)
            {
              legajo=prompt("Ingrese correctamente su numero de legajo");
              legajo=parseInt(legajo)
                }
            document.getElementById("Legajo").value=legajo
    //pido nacionalidad
        nacionalidad=prompt("ingrese a para Argentinos, e para extranjeros o n para nacionalidad")
            while(nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n")
        {
            alert("error ingrsese a para Argentinos, e para extranjeros o n para nacionalidad")
            nacionalidad=prompt("ingrese a para Argentinos, e para extranjeros o n para nacionalidad")
            if(nacionalidad==null)
        {
            nacionalidad=prompt("ingrese a para Argentinos, e para extranjeros o n para nacionalidad")
            ;break
        }
        }
        if(nacionalidad=="a")
        {
            nacionalidad="Argentino"
            document.getElementById("Nacionalidad").value=nacionalidad
        }
        else if (nacionalidad=="e")
        {
            nacionalidad="extranjero"
            document.getElementById("Nacionalidad").value=nacionalidad
        }
        else if (nacionalidad=="n")
        {
            nacionalidad="nacionalizado"
            document.getElementById("Nacionalidad").value=nacionalidad
        }
     //calculo el sueldoMaxNacionalizados
        if(nacionalidad=="nacionalizado"&&sueldo>sueldoMaxNacionalizados)
        {
            sueldoMaxNacionalizados=sueldo
            console.log(sueldoMaxNacionalizados)
        }
        //calculo sueldo max femenino y nacionalidad Argentino
        if(sexo=="femenino"&&nacionalidad=="Argentino" )
         {
             sueldoMaxFemeninoArgentinos=sueldo
             if(sueldo>sueldoMaxFemeninoArgentinos)
             {
                 sueldoMaxFemeninoArgentinos=sueldo
             }
         }
// calculo sueldo promedio de masculino femenino y los 2 juntos
         if(sexo=="femenino")
         {
            sumarF=sumarF + sueldo
            contadorF++
         }
         
         
         else if (sexo=="masculino")
        {
             sumarM=sumarM + sueldo
             contadorM++
            
        }
        sueldoPromedioFemenino=sumarF/contadorF
        sueldoPromedioMasculino=sumarM/contadorM
        sueldoPromedioTotalFyM=(sumarF+sumarM)/(i)
}
/*final de for*/
    

    alert("El sueldo maximo de nacionalizado es " +(sueldoMaxNacionalizados))
    alert("El sueldo maximo femenino argentinos es " +(sueldoMaxFemeninoArgentinos))
    alert("Sueldo promedio femenino es "+(sueldoPromedioFemenino)+" sueldo promedio masculino es "+(sueldoPromedioMasculino)+" Sueldo promedio total es "+(sueldoPromedioTotalFyM))

}
