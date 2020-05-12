var num = parseFloat(prompt("Ingrese un numero"));
var total = 1;
for(var i = 1; i <= num; i++){
    total = total * i;
}
alert("Factorial del numerno " + num +" es: " + total);