/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var resultado
    var numero1=parseInt(document.getElementById("numeroUno").value)
    var numero2=parseInt(document.getElementById("numeroDos").value)
    resultado = (numero1 + numero2);
    alert ("la suma es "+resultado);


}

