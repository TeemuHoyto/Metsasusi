'use strict'
const print = document.getElementById('printter');
let printTop = document.getElementById('printter2');
let total1 = parseInt(document.getElementById('input1').value);
let total2 = parseInt(document.getElementById('input2').value);



function printEven() {
  let i = 2;
  print.innerHTML = '';
  printTop.innerHTML = '';
  for (i = 2; i <= 50; i++) {
    if (i % 2 === 0) {

      printTop.innerHTML = "This function prints even numbers starting from number 2 to 50";
      print.innerHTML += i + " ";

    }
  }
}



function reset() {
  print.innerHTML = "";
  printTop.innerHTML = '';
}



document.getElementById('btn').onclick = function a() {
  let total1 = parseInt(document.getElementById('input1').value);
  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total1)) {
    print.innerHTML = "Insert number to input field nro:1 on top right corner!";
  } else {
    for (let i = 1; i <= total1; i++) {

      printTop.innerHTML = "This function prints numbers starting from 1 to a number of your choosing";
      print.innerHTML += i + " ";
    }
  }
};



document.getElementById('btn1').onclick = function b() {
  let total1 = parseInt(document.getElementById('input1').value);
  let total2 = parseInt(document.getElementById('input2').value);
  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total1)) {
    print.innerHTML = "Insert first number to input field nro:1(LOW) and another to input field nro:2(HIGH) on top right corner!";
  } else {
    for (let i = total1; i <= total2; i++) {

      printTop.innerHTML = "This function prints numbers starting from a number of your choosing to a number of your choosing";
      print.innerHTML += i + " ";
    }
  }
};


document.getElementById('btn2').onclick = function star() {
  let total1 = parseInt(document.getElementById('input1').value);
  let stars ="";
  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total1)) {
    print.innerHTML = "Insert number to input field nro:1 on top right corner!";
  } else {
    for (let i = 1; i <= total1; i++) {

      printTop.innerHTML = "This function prints out star as many as you want";
      
      stars += "*";
    }
    print.innerHTML = stars + "<br>";
  }
};
document.getElementById('btn3').onclick = function c() {
  let total1 = parseInt(document.getElementById('input1').value);
  let total2 = parseInt(document.getElementById('input2').value);
  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total2)) {
    print.innerHTML = "Insert number to input field nro:2 on top right corner and also field NRO:1 must have a number!";
  } else {
    for(let j = 1; j<=total2;j++ ){
    for (let i = 1; i <= total1; i++) {

      printTop.innerHTML = "This function prints out star in boxes";
      print.innerHTML+="*";
     
    }
    
    print.innerHTML +="<br>";
  }
}
};
document.getElementById('btn4').onclick = function d() {
  let total2 = parseInt(document.getElementById('input2').value);
  let stars="";
  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total2)) {
    print.innerHTML = "Insert a number to input field nro:2 on top right corner!";
  } else {
    for(let i = 1; i<=total2;i++ ){
    for (let j = 1; j<=i;j++ ) {

      printTop.innerHTML = "This function prints out star in a shape of a Pagoda";
      stars+="*";
    }
    print.innerHTML+="<br>"+stars;
  }
}
};


document.getElementById('btn5').onclick = function e() {
  let total1 = parseInt(document.getElementById('input1').value);
  let nums=[].reduce((a,b) => a+b, 0);
  
  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total1)) {
    print.innerHTML = "Insert a number to input field nro:1 on top right corner!";
  } else {
    for(let i = 0; i<=total1;i++ ){

      printTop.innerHTML = "This function does math for you lazy sod";
      nums+=i;
    }
  
    print.innerHTML=nums;
  }

  
};


document.getElementById('btn6').onclick = function f() {
  let total1 = parseInt(document.getElementById('input1').value);
  let nums=[].reduce((a,b) => a*b, 1);
  let p=1;

  print.innerHTML = "";
  printTop.innerHTML = '';

  if (isNaN(total1)) {
    print.innerHTML = "Insert a number to input field nro:1 on top right corner!";
  } else {
    for(let i = 1; i<=total1;i++ ){

      printTop.innerHTML = "This function does multiplications on your array";
      nums*=i;
    }
    print.innerHTML=nums;
  }
};
function all(){
  const arrOfFunc = [printEven()];
    for(let i = 0; i<=arrOfFunc.length;i++ ){
     console.log(arrOfFunc[i]);
      print.innerHTML=arrOffunc[i](   );
    }
  
  }
  document.getElementById('btn8').onclick = function g() {
    let total1 = parseInt(document.getElementById('input1').value);
    let raimo ="";
    print.innerHTML = "";
    printTop.innerHTML = '';
  
    if (isNaN(total1)) {
      print.innerHTML = "Insert number to input field nro:1 on top right corner!";
    } else {
      for (let i = 1; i <= total1; i++) {
  
        printTop.innerHTML = "This function prints out the name of your Lord and Creator";
        
      raimo += "Raimo ";
      }
      print.innerHTML = raimo;
    }
  };
