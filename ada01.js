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