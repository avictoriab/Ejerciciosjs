function calcular(){
    P = 250;
    r = 0.15;
    n = 12;
    t = 1;
    PMT = 250; //PAYMENT MADE EACH MONTH

    a = r/n;
    b = n*t;

//RESULTADO
//FORMULA DE INTERES CON CONTRIBUCIONES REGULARES 
    balancetotal = ((Math.pow(1+a,b)) * P) + (PMT * ( ( (Math.pow(1+a,b)) -1 ) / a ));
    resultado = balancetotal.toFixed(2);
document.getElementById("resultado").innerHTML="El interes compuesto es de: "+resultado;
}
