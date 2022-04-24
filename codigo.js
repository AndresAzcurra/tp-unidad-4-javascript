
// 1. Realiza un programa para obtener el menor de 2 números ingresados

var valor1 = Number(prompt("ingrese un numero"));
var valor2 = Number(prompt("ingrese un numero"));
 
if (valor1>valor2) {
    alert ("El numero menor es  " + valor2);
}else {
    alert ("El numero menor es  "   + valor1);
}

// 2. Realizar un algoritmo que determine  si un número es par o impar

if ( valor1 %2 == 0){
    alert ("Este numero es par "  + valor1)
} else {
    alert ("Este numero es impar" + valor1 );
};
if ( valor2 %2 == 0){
    alert ("Este numero es par  " + valor2 );
} else {
    alert ("Este numero es impar  " + valor2 );
}

// 3. Declarar una variable que se llame ganeLaCarrera y asignarle el valor false. Mostrar por la terminal un mensaje que diga 'Ganaste' si ganeLaCarrera es verdadero y 'Perdiste' si su valor es falso.

var ganeLaCarrera= false ;
 if (ganeLaCarrera == true) {
     console.log("ganaste");
 } else{
     console.log("perdiste");
 }

 //4. Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. Mostrar por la terminal uno de los siguientes mensajes según la posición que salió el corredor:

 var posicionEnLaCarrera = 6 

 switch (posicionEnLaCarrera) {
     case 1:
         console.log('FELICITACIONES, SALISTE 1RO' );
         break;
     case 2:
         console.log('Te falto poquito para ganar');
            break;
     case 3:
         console.log('Sos un orgullo para tu familia' );
                break;
     case 4:
         console.log('Volvé a tu casa' );
                    break;
 
     default: 
     console.log("No tires fruta");
         break;
 }

 //5. Repetir el ejercicio anterior pero usando un solo console.log en todo el programa.

 
 var posicionEnLaCarrera = 6 

 switch (posicionEnLaCarrera) {
     case 1:
        alert ('FELICITACIONES, SALISTE 1RO' );
         break;
     case 2:
        alert('Te falto poquito para ganar');
            break;
     case 3:
         alert('Sos un orgullo para tu familia' );
                break;
     case 4:
         console.log('Volvé a tu casa' );
                    break;
 
     default: 
   alert("No tires fruta");
         break;
 }

 // 6. Realizar un programa que calcule el importe total a abonar en una factura, teniendo en cuenta que si el importe total supera los 1000$  se aplica un descuento del 20%.


 var abonoFactura = 1300;
  if (abonoFactura > 1000) {
      var importeFinal =  abonoFactura - (abonoFactura * 0.2)
      console.log(importeFinal);
  }

  // 7. Hacer un programa para obtener las comisiones por ventas de un vendedor. Los datos que se ingresan son monto vendido y código de vendedor Si el código de vendedor es menor a 100 las comisiones son de un 30%, si el código esta entre 100 y 200 son del 20% y si es mayor a 200 10%. Mostrar el código de vendedor, el monto vendido y el valor de las comisiones.

 var montoVendido = Number(prompt("ingrese el monto vendido" , "ejercicio 4-7 "));
 var codigoVendedor = Number(prompt("ingrese el codigo del vendedor" , "ejercicio 4-7 "));

  if (codigoVendedor <100){
      var comision = montoVendido * 0.3;
      console.log("Monto vendido es " + montoVendido );
      console.log("La comision por venta es " + comision);
      console.log("El codigo del vendedor es " + codigoVendedor);
  }else if ( codigoVendedor > 100 && codigoVendedor < 200){
      var comision = montoVendido *0.2 ;
    console.log("Monto vendido es " + montoVendido );
    console.log("La comision por venta es " + comision);
    console.log("El codigo del vendedor es " + codigoVendedor);
  } else {
    var comision = montoVendido *0.1 ;
    console.log("Monto vendido es " + montoVendido );
    console.log("La comision por venta es " + comision);
    console.log("El codigo del vendedor es " + codigoVendedor);
  };

  // 8. Se desea escribir los nombres de los días de la semana en función de la variable d (día) introducida por teclado.  1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo)
  
  var D = Number(   prompt("ingresar en numeros el dia de la semana","1=lunes ,2=martes ,3=miercoles ,4=jueves,5=viernes ,6=sabado, 7=domingp"))
  
  switch (D) {
     
    case 1:
        alert("hoy es lunes");
        
        break;
        case 2:
            alert("hoy es martes");
            
            break;
            case 3:
                alert("hoy es miercoles");
                
                break;
                 case 4:
                alert("hoy es jueves");
                
                break;
                case 5:
                    alert("hoy es viernes");
                    
                    break;
                    case 6:
                        alert("hoy es sabado");
                        
                        break;
                        case 7:
                            alert("hoy es dommingo");
                            
                            break;
          
          
  
      default:
          alert("Ese  numero no corresponde  a ningun dia" )
          break;
  }

  // 9. Hacer un programa que calcule el pago que hacen un grupo de personas para ver una película teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona y para grupos de 8 personas o más el pago es 0.5 pesos por persona.

  var cantidadDePersonas = Number(prompt("ingrese la cantidad de entradas"))
   if (cantidadDePersonas < 8){
       alert ("el precio por entrada es  1,5 pesos " + "y el total a a pagar es " + (cantidadDePersonas *1.5) )
   }else if (cantidadDePersonas >= 8){
    alert ("el precio por entrada es  0,5 pesos" + " y el total a apagar es  " + (cantidadDePersonas *0.5) )

   }

   //10. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto debe abonar el cliente aplicando el descuento si es necesario.

   var valorDelacompra= Number(prompt("Ingrese el valor de su compra "))
   var descuento= 0.15 ;

   if (valorDelacompra>= 100){
       alert("su precio con descuento es de :"+ (valorDelacompra - (valorDelacompra * descuento)))
   }else {
       alert("Aproveche el descuento que realizamos y realise una compra mayor a 100 p")
   }