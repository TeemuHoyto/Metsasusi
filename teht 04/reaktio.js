"use strict";

let nappulat = [
  document.getElementById('1'),
  document.getElementById('2'),
  document.getElementById('3'),
  document.getElementById('4')
];

nappulat[0].onclick = function() { painallus(0) };
nappulat[1].onclick = function() { painallus(1) };
nappulat[2].onclick = function() { painallus(2) };
nappulat[3].onclick = function() { painallus(3) };


let nykyinen =1;
let tulosElementti = document.getElementById('tulos');
let arvo = parseInt(tulosElementti.innerHTML);
let loppu = document.getElementById('overlay');
let loppuSumma = document.getElementById('loppuSumma');
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let tens =0;
let seconds = 0;
let ajastin = 0;
let Interval ;
let arvotutNum = [];

let end="end";

function star(){
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);

ajastin = setTimeout(aktivoiSeuraava, 1500, 1000);
aktivoiSeuraava(aika);
}  

  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }

function aktivoiSeuraava(aika) {
  if(end === ""){
return;
  }else if(arvotutNum.length ==10){
    lopetaPeli()
    pysayta()
}else{
  aika = aika *0.95;
  let seuraava = arvoUusi();
 arvotutNum.push(seuraava);
  nappulat[nykyinen].style.backgroundImage ="url('pallero.png')";
  nappulat[seuraava].style.backgroundImage ="url('Naama.png')";
  console.log(arvotutNum);
  nykyinen = seuraava;
}
  ajastin = setTimeout(aktivoiSeuraava, aika, aika);
  }


  function arvoUusi(edellinen) {
   
    let uusi = getRandomInt(0, 3);
    
   if(uusi === arvotutNum.length){
    uusi = getRandomInt(0, 3);
    }
    
    return uusi;
  }

function painallus(i) {
  if(i!=arvotutNum[0]){
    lopetaPeli();
    pysayta()
    end=""; 
   
  }else{
    tulosElementti.innerHTML = arvo;
    arvo = arvo + 1;
    arvotutNum.shift()
    
  }

  }
function pysayta() {
       clearInterval(Interval);
       ajastin = 0;
  }

function lopetaPeli() {
    for (var i = 0; i < 4; i++) {
      nappulat[i].style.backgroundImage ="url('black.png')";
      nappulat[i].onclick = null;
     
    }
loppu.style.visibility = "visible";
loppuSumma.innerHTML ="<br>"+ tulosElementti.innerHTML;

  }

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }