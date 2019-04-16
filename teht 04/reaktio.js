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

let nykyinen =0;
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
  aika = aika -10;
  let seuraava = arvoUusi(nykyinen);

  nappulat[nykyinen].style.backgroundColor = "#a53d3d";
  nappulat[seuraava].style.backgroundColor = "#11CCEC";
  
  nykyinen = seuraava;

  ajastin = setTimeout(aktivoiSeuraava, aika, aika);
  function arvoUusi(edellinen) {
    // Tämä on vain demotarkoituksessa näin!
    // Koodaa tämä niin, että seuraava arvotaan. Muista, että sama ei saa
    // tulla kahta kertaa peräkkäin.
    let uusi = getRandomInt(0, 3);
    if(uusi == edellinen){
      arvoUusi()
    }
    return uusi;
  }
}
function painallus(i) {
  if(i==nykyinen){arvo = arvo + 1;
        tulosElementti.innerHTML = arvo;
  }else{
    lopetaPeli();
    pysayta()
  }

  }
function pysayta() {
       clearInterval(Interval);
  }

function lopetaPeli() {
     // pysäytä ajastin
  
    for (var i = 0; i < 4; i++) {
      nappulat[i].style.backgroundColor = "black";
      nappulat[i].onclick = null;
  
    }
loppu.style.visibility = "visible";
loppuSumma.innerHTML ="<br>"+ tulosElementti.innerHTML;


    // ilmoita lopputulos
    // Vinkki: dokumentissa on valmiina taustaelementti ja elementti
    // lopputuloksen näyttämiseen. Aseta overlay-elementti näkyväksi
    // ja näytä tulos gameoover-elementissä
  }

  // generoi satunnaisen kokonaisluvun väliltä min - max
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }