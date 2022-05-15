

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let elementH2 = document.getElementById("resul");

function somar(){

    

    let parcela1 = parseFloat(input1.value);
    let parcela2 =  parseFloat(input2.value);
    let resul = parcela1 + parcela2; 


    elementH2.innerHTML = + resul;

    //Limpar a tela
    input1.value = "";
    input2.value = "";

}
function Multiplicar(){

    

    let multiplicando = parseFloat(input1.value);
    let multilpicador=  parseFloat(input2.value);
    let resul = multiplicando * multilpicador; 

    elementH2.innerHTML = + resul;

    //Limpar a tela
    input1.value = "";
    input2.value = "";

}
function Dividir(){

    let dividendo = parseFloat(input1.value);
    let divisor =  parseFloat(input2.value);
    let resul =dividendo / divisor; 

    elementH2.innerHTML = + resul;

    //Limpar a tela
    input1.value = "";
    input2.value = "";

}
function Subtrair(){

    let minuendo = parseFloat(input1.value);
    let subtraendo=  parseFloat(input2.value);
    let resul = minuendo - subtraendo; 


    elementH2.innerHTML = + resul;

    //Limpar a tela
    input1.value = "";
    input2.value = "";

}



