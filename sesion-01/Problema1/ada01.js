// A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante com su respectivo helado.
// Ellos quieren comprar el helado mas caro que puedan con la plata que TransitionEvent, asi que... veamos como podemos ayudarlos.

// ----------------------------------
// ==================================
// Roberto tiene $1.5 USD
// Pedro tiene $1.7 USD
// Cofla tiene $3 USD
// ==================================
// ----------------------------------

// ==============================================
// Los precios de helados son los siguientes:
// Palito de helado de agua: $0.6 USD
// Palito de helado de crema: $1 USD
// Bombón helado de marca heladix: $1.6 USD
// Bombón helado de marca heladovich: $1.7 USD 
// Bombón helado de marca helardo: $1.8 USD
// Potecito de helado con confites: $2.9 USD  
// Pote de 1/4 KG -> $2.9 USD
// ================================================

//                                 CREAR SOLUCIONES: 
//                                        - Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar. listo...
//                                        - Si hay 2 o mas con el mismo precio, mostrar ámbos. listo...
//                                        - Cofla quiere saber cuanto es el vuelto.

let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");
let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroCofla = parseInt(dineroCofla);

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    prompt("Roberto puedes comprar un palito de helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
  prompt("Roberto puedes comprar un palito de helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  prompt("Roberto puedes comprar un bombón helado de marca heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  prompt("Roberto puedes comprar un bombón helado de marca heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  prompt("Roberto puedes comprar un bombón helado de marca helardo");
}
else if (dineroRoberto >= 2.9) {
  prompt("Roberto Puedes comprar un Potecito de helado con confites o un Pote de 1/4 KG");
}
else {
  prompt("Lo sentimos mucho Roberto, pero no te alcanza para ni un producto de nuestro catalago.");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  prompt("Pedro puedes comprar un palito de helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
prompt("Pedro puedes comprar un palito de helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
prompt("Pedro puedes comprar un bombón helado de marca heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
prompt("Pedro puedes comprar un bombón helado de marca heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
prompt("Pedro puedes comprar un bombón helado de marca helardo");
}
else if (dineroPedro >= 2.9) {
prompt("Pedro Puedes comprar un Potecito de helado con confites o un Pote de 1/4 KG");
}
else {
  prompt("Lo sentimos mucho Pedro, pero no te alcanza para ni un producto de nuestro catalago.");
}

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  prompt("Cofla puedes comprar un palito de helado de agua y tu cambio es " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
prompt("Cofla puedes comprar un palito de helado de crema" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
prompt("Cofla puedes comprar un bombón helado de marca heladix" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
prompt("Cofla puedes comprar un bombón helado de marca heladovich " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
prompt("Cofla puedes comprar un bombón helado de marca helardo" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
prompt("Cofla Puedes comprar un Potecito de helado con confites o un Pote de 1/4 KG y tu cambio es de " + (dineroCofla - 2.9));
}
else {
  prompt("Lo sentimos mucho Cofla, pero no te alcanza para ni un producto de nuestro catalago.");
}
//=================================================================================================================================================================
// let boleto = 0.9;
// let dineroCofla = promnt(Cuanto dinero tienes Cofla?);
// dineroCofla = parseInt("dineroCofla")
//  if (dineroCofla/boleto > 1 && dineroCofla/boleto < 2){
//   let saldo = dineroCofla - boleto;
//   alert("Cofla puedes comprarte un boleto y tu cambio es de " + saldo + " pesos");
//  }
// else if (dineroCofla/boleto > 2 && dineroCofla/boleto < 3){
//   let saldo = dineroCofla - boleto*2;
//   alert("Cofla puedes comprar 2 boletos y tu cambio es de " + saldo +  "pesos");
// }
// else if (dineroCofla/boleto >= 3){
//   let saldo = dineroCofla - boleto*3;
//   alert("Cofla puedes comprarte 3 boletos y el saldo es de " + saldo + " para regalarlo");
// }
// else {
//   alert("Lo siento cofla no te alcanza para ni un boleto");
// }
// 
// ========================================================================================================================================================================

// let ladron1 = prompt("El ladron Num. 1 esta mintiendo?");
// let ladron2 = prompt("El ladron Num. 2 esta mintiendo?");
// let cofla = prompt("Cofla esta mintiendo?");
// ladron1 = parseInt("ladron1");
// ladron1 = parseInt("ladron2");
// cofla = parseInt("cofla"); 
// if (ladron1 == 1){
//   alert("Sospechoso1 si esta mintiendo; darle una descarga");
// }
// else if (ladron1 == 2){
//   alert("Sospechoso1 no esta mintiendo, no hacerle descarga");
// }
// else {
//   alert("No esta clara la informmación, reintente de nuevo");
// }

// if (ladron2 == 1){
//   alert("Sospechoso2 si esta mintiendo; darle una descarga");
// }
// else if (ladron2 == 2){
//   alert("Sospechoso2 no esta mintiendo, no hacerle descarga");
// }
// else {
//   alert("No esta clara la informmación, reintente de nuevo");
// }

// if (cofla == 1){
//   alert("Cofla si esta mintiendo; darle una descarga");
// }
// else if (cofla == 2){
//   alert("Cofla no esta mintiendo, no hacerle descarga");
// }
// else {
//   alert("No esta clara la informmación, reintente de nuevo");
// }