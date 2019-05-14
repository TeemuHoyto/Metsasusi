marsu();
  function marsu(){
    if(typeof localStorage.getItem('otsikko') === "string" ){
      printTop.innerHTML = "";
    }else{
    printTop.innerHTML = "Hello human, input desired date to <a href='config.html' target='_blank'>config.html</a>  and machine gods will grant your wishes.";
}
  }
let channel = new BroadcastChannel('StevesTimeMachineToTalkWithMachineGods');
channel.onmessage = function (ev) {location.reload(),localStorage.setItem('date',ev.data[1]), localStorage.setItem('otsikko',ev.data[0]), localStorage.setItem('message',ev.data[2]); 
   }
   let humanDate = new Date(localStorage.getItem('date')).getTime();
   topi.innerHTML = localStorage.getItem('otsikko');
   let T = setInterval(function(){
    let now = new Date().getTime();
    let distance = humanDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("aika").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(T);
        document.getElementById("aika").innerHTML = "";
        document.getElementById("topi").innerHTML = localStorage.getItem('message');
      }
    });
    