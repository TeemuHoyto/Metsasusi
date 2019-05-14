document.getElementById('config-form').onsubmit = function() {
  on();
    return false;
    
};

let channel = new BroadcastChannel('StevesTimeMachineToTalkWithMachineGods');
channel.postMessage("master");
function on(){
    let  master = [];
    let otsikko = document.getElementById("otsikko").value;
let time = document.getElementById("time").value;
let date = document.getElementById("date").value;
let message = document.getElementById("message").value;
TimeDate = date.concat(" "+time);
    master.push(otsikko,TimeDate,message)
channel.postMessage(master);
console.log(master);

}