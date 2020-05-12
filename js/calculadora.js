var x, y, op;
var res = document.getElementById("result");
function calcular(){
    x = parseInt(document.getElementById("n1").value);
    y = parseInt(document.getElementById("n2").value);
    op = document.getElementById("oper").value;
    switch(op){
        case '1':res.value = suma(); break;
        case '2':res.value = resta(); break;
        case '3':res.value = multi(); break;
        case '4':res.value = divi(); break;
    }
}
/*
var texto = resultado;
texto = prompt("Ingresar numero");
resultado = Math.sqrt(texto)
document.write(resultado);
console.log(resultado);
alert (resultado);
*/
/*
var x, y, op;
x = prompt("n1 :");
y = prompt("n2 :");
op = prompt("op: ")
/*if (a>b){
    mostrar(a)
}else{
    mostrar(b)
}else{
    mostrar(iguales);
}*/
/*function mostrar(resultado){
    document.write(resultado);
    console.log(resultado);
    alert(resultado);
}
switch(op){
    case '1':mostrar(suma());
    break;

    case '2':mostrar(resta());
    break;

    case '3':mostrar(multi());
    break;

    case '4':mostrar(divi());
    break;
    default:break;
}*/

function suma(){
    return (x+y);
}
function resta(){
    return (x-y);
}
function multi(){
    return (x*y)
}
function divi(){
    if(y==0)
    return "No se puede dividir entre cero"
    return (x/y);
}
/*
var w = prompt("N:");
var i, sum = 0;
for(i=1; i<=w;i++){
    sum +=i*i;
}
document,write(sum);
*/
