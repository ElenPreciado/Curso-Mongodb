const precios = [100, 5000, 2000, 500]
 

function totalCantidad(precios){
  var totalPrecios = precios.reduce(
     function (accumulator, precios) {
       return accumulator + precios;
     }
  );
  return totalPrecios;
}

 


var resultado =  totalCantidad(precios)
document.write(resultado);
