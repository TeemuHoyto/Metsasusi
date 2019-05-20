document.getElementById('config-form').onsubmit = function() {
  on();
    return false;
    
};


function on(){
    let channel = new BroadcastChannel('StevesTimeMachineToTalkWithMachineGods');
let  master = [];
    let otsikko = document.getElementById("otsikko").value;
let time = document.getElementById("time").value;
let date = document.getElementById("date").value;
let message = document.getElementById("message").value;
localStorage.setItem('otsikko',otsikko);
localStorage.setItem('time',time);
localStorage.setItem('date',date);
localStorage.setItem('message',message);    
TimeDate = date.concat(" "+time);
master.push(otsikko,TimeDate,message)
channel.postMessage(master);
}
if(typeof localStorage.getItem('otsikko').length == 0 ){
    printTop.innerHTML = "";
  }else{
    document.getElementById("otsikko").value = localStorage.getItem('otsikko'); 
    document.getElementById("date").value = localStorage.getItem('date'); 
    document.getElementById("time").value = localStorage.getItem('time'); 
    document.getElementById("message").value = localStorage.getItem('message'); 
}