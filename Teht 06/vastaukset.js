let print =document.getElementById("JSONteksti");
let ihminen={
     Nimi:{
      etunimi: "Raimo",
      sukunimi: "Vesimies"
},
Ikä:357,
Sukupuoli:"Hermafrodiitti",
Harrastukset:["Myrkkyjen tekeminen ja tehokkuuden testaus","Vuorien siirtely","Raivokoirien masunkutitus","HippoHuntter"],
Avaruuspuolustuskillanjäsen:true
};
let JsonIhminen = JSON.stringify(ihminen);
console.log(JsonIhminen);
print.innerHTML = JsonIhminen;
let marsupartio ={};
console.log(marsupartio);
marsupartio.etunimi ="Mangus";
console.log(marsupartio);
marsupartio.sukunimi="von Wright";
console.log(marsupartio);
marsupartio.etunimi ="Ferdinand";
console.log(marsupartio);
delete marsupartio.etunimi;
console.log(marsupartio);

document.getElementById( "sisältö" ).onchange = function(){
  let parse=this.value;
  let valmis = JSON.parse(parse);
    console.log(valmis);
 }