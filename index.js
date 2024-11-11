const screen=document.querySelector(".screen");
const keys=Array.from(document.querySelectorAll(".key"));
const keyAdd=document.querySelector(".keyAdd");
const keySub=document.querySelector(".keySub");
const keyMult=document.querySelector(".keyMult");
const keyDiv=document.querySelector(".keyDiv");
const keyOper=document.querySelector(".keyOper");

let firstNum="";
let secondNum="";
let toggle=false;
let operator="";
let result;

for(let i=0;i<keys.length;i++){
    keys[i].onclick=()=>{
        if(toggle==false){
            firstNum+=keys[i].innerHTML;
            screen.innerHTML=firstNum+operator+secondNum;
            console.log(firstNum)
        }else{
            secondNum+=keys[i].innerHTML;
            screen.innerHTML=firstNum+operator+secondNum;
            console.log(secondNum);
        }
    }
}

keyAdd.onclick=()=>{
    if(firstNum!=""&&toggle==false&&operator==""){
        toggle=true;
        operator="+"
        screen.innerHTML=firstNum+operator+secondNum;
    }
}

keySub.onclick=()=>{
    if(firstNum!=""&&toggle==false&&operator==""){
        toggle=true;
        operator="-"
        screen.innerHTML=firstNum+operator+secondNum;
    }
}

keyMult.onclick=()=>{
    if(firstNum!=""&&toggle==false&&operator==""){
        toggle=true;
        operator="*"
        screen.innerHTML=firstNum+operator+secondNum;
    }
}

keyDiv.onclick=()=>{
    if(firstNum!=""&&toggle==false&&operator==""){
        toggle=true;
        operator="/"
        screen.innerHTML=firstNum+operator+secondNum;
    }
}



keyOper.onclick=()=>{
    if(firstNum!=""&&secondNum!=""&&operator!=""){
        if(operator=="+"){
            result=parseInt(firstNum)+parseInt(secondNum);
            firstNum="";
            secondNum="";
            operator="";
            toggle=false;
            console.log(result);
            screen.innerHTML=result;
        }
        if(operator=="-"){
            result=parseInt(firstNum)-parseInt(secondNum);
            firstNum="";
            secondNum="";
            operator="";
            toggle=false;
            console.log(result);
            screen.innerHTML=result;
        }
        if(operator=="*"){
            result=parseInt(firstNum)*parseInt(secondNum);
            firstNum="";
            secondNum="";
            operator="";
            toggle=false;
            console.log(result);
            screen.innerHTML=result;
        }
        if(operator=="/"){
            result=parseInt(firstNum)/parseInt(secondNum);
            firstNum="";
            secondNum="";
            operator="";
            toggle=false;
            console.log(result);
            screen.innerHTML=result;
        }
    }
}