//calculatrice1
/*var Result = document.getElementById("zero");

function show(number){
    Result.value+=number;

}


function result(){
    try{

        Result.value=eval(Result.value)
    }
    catch(error){
        Result.value="ERROR BITCH"
    }
}

function erase(){
    Result.value="";
}

function del(){
    Result.value=Result.value.slice(0,-1);
}*/
//CALCULATRICE 2
var num1 = 0;
var num2 = 0;
var operatuer ="";
var afterop= false;
function show(number){
    if(afterop){
        document.getElementById("zero").value = "";
    }
    document.getElementById("zero").value+= number;
    afterop= false;
}
 function operation(op){
    num1 = parseInt(document.getElementById("zero").value);
    operatuer= op 
    afterop= true;
}
function result(){
    num2= parseInt(document.getElementById("zero").value);
    if(operatuer=="+"){
        document.getElementById("zero").value = num1+num2;
    }
    if(operatuer=="-"){
        document.getElementById("zero").value = num1-num2;
    }
    if(operatuer=="*"){
        document.getElementById("zero").value = num1*num2;
    }
    if(operatuer=="/"){
    document.getElementById("zero").value = num1/num2;
    }
}
function erase(){
    document.getElementById("zero").value="";
}
