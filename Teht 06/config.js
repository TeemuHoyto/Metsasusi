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
localStorage.setItem('otsikkoCon',otsikko);
localStorage.setItem('timeCon',time);
localStorage.setItem('dateCon',date);
localStorage.setItem('messageCon',message);    
TimeDate = date.concat(" "+time);
master.push(otsikko,TimeDate,message)
channel.postMessage(master);
}
if(typeof localStorage.getItem('otsikkoCon').length == 0 ){
    printTop.innerHTML = "";
  }else{
    document.getElementById("otsikko").value = localStorage.getItem('otsikkoCon'); 
    document.getElementById("date").value = localStorage.getItem('dateCon'); 
    document.getElementById("time").value = localStorage.getItem('timeCon'); 
    document.getElementById("message").value = localStorage.getItem('messageCon'); 
}