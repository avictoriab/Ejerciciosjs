
function cargarejemplo(){

document.getElementById("text").value="55,99,43,60,67,80,75,66,74,40,50,39,37";

}
function Reiniciar(){
location.reload();
}
function porcentaje(a,b){
    operacion = (a/b)*100;
    resultado = operacion.toFixed(2);
    return resultado;
}
function calcular(){
var array = document.getElementById("text").value.split(/,/);
let nuevoarray= [];


//ESTADISTICA
let canttotal = array.length;

//ALUMNOS MENOR DE 40KG
let menorquecuarenta = array.filter(Element => Element < 40);
cantmencuarenta = menorquecuarenta.length;
let porcentaje1 = porcentaje(cantmencuarenta,canttotal);

//ALUMNOS ENTRE 40 Y 50KG
let entrecuaycin = array.filter(Element => Element > 39 && Element < 51);
cantentrecuaycin = entrecuaycin.length;
let porcentaje2 = porcentaje(cantentrecuaycin,canttotal);

//ALUMNOS MAS DE 50 Y MENOS DE 60KG
let masdecinmensecen = array.filter(Element => Element > 50 && Element < 60);
cantmasdecinmensecen = masdecinmensecen.length;
let porcentaje3 = porcentaje(cantmasdecinmensecen,canttotal);

//ALUMNOS MAS O IGUAL A 60KG
let masoiguasecen = array.filter(Element => Element >= 60);
cantmasoigasecen = masoiguasecen.length;
let porcentaje4 = porcentaje(cantmasoigasecen,canttotal);




//RESULTADO

document.getElementById("resultado").innerHTML="Alumnos de menos de 40Kg: "+cantmencuarenta+" ("+porcentaje1+"%"+")"+"<br>"+
											   "Alumnos entre 40 y 50kg: "+cantentrecuaycin+" ("+porcentaje2+"%"+")"+"<br>"+
											   "Alumnos de mas de 50 y menos de 60kg: "+cantmasdecinmensecen+" ("+porcentaje3+"%"+")"+"<br>"+
											   "Alumnos de mas o igual a 60Kr: "+cantmasoigasecen+" ("+porcentaje4+"%"+")"+"<br>"

}

