const PRICESMALL = 4.99
const PRICEMEDIUM = 8.99
const PRICELARGE = 12.99
var small
var medium
var large

//button small
function aantalS(){
small = prompt("how many Small pizza do you want? they are "+ PRICESMALL + " each");
document.getElementById("sml").innerHTML = small +" x "+ small*PRICESMALL;
subsmall = small*PRICESMALL;
}

//button medium
function aantalM(){
medium = prompt("how many Medium pizza do you want? they are "+ PRICEMEDIUM + " each");
document.getElementById("med").innerHTML = medium +" x "+ medium*PRICEMEDIUM;
submedium = medium*PRICEMEDIUM;
}

//button large
function aantalL(){
large = prompt("how many Large pizza do you want? they are "+ PRICELARGE + " each");
document.getElementById("lge").innerHTML = large +" x "+ large*PRICELARGE;
sublarge = large*PRICELARGE;
}

// button receipt
function subtotal(){
var total =subsmall + submedium + sublarge ;
alert(total) ;
document.write("<h1>you got "+ small + " small pizza's x " + PRICESMALL +" in total will be " + subsmall + " .<br></h1>");
document.write("<h1>you got "+ medium + " medium pizza's x " + PRICEMEDIUM +" in total will be " + submedium+ " .<br></h1>");
document.write("<h1>you got "+ large + " large pizza's x " + PRICELARGE +" in total will be " + sublarge + " .<br></h1>");
document.write("_____________________________________________________________________________________________<br></h1>");
document.write("<h1>All in total will be "+ total+".</h1>")
}