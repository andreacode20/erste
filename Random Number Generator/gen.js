const generate = document.querySelector(".generate");


generate.addEventListener('click', generateRandomNumb);


function generateRandomNumb(){
    const fromNum=document.querySelector(".fromNumber").value;
    const toNum=document.querySelector(".toNumber").value;
 
 randomNumb=Math.floor(Math.random()* toNum);
 
 if(randomNumb>= fromNum){
     const result=document.querySelector(".result");
     result.innerHTML=randomNumb;
 }

}



