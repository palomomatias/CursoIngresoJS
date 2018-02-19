function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

 switch(mesDelAño)
    {
        case "Julio":
        case "Agosto":
            alert("abrigate que hace frio");
            break;
        case "Enero":
        case "Febrero":
        case "Marzo": 
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("falta para el invierno");
            break;
        default:alert("ya pasamos el frio") 
    }   

              





}//FIN DE LA FUNCIÓN