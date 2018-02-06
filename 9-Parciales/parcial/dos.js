function Mostrar()
{
  var importe;
  var importefinal;
  var iva;
  importe=prompt("","");
  importe=parseInt(importe);
  iva=((importe*21)/100);
  importefinal=(iva+importe);
  document.getElementById("importeFinal").value=importefinal;
  

 
}
