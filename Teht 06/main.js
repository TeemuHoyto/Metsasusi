marsu();
  function marsu(){
    if(typeof localStorage.getItem('otsikko') === "string" ){
      printTop.innerHTML = "";
    }else{
    printTop.innerHTML = "Hello human, input desired date to <a href='config.html' target='_blank'>config.html</a>  and machine gods will grant your wishes.";
}
  }
let channel = new BroadcastChannel('StevesTimeMachineToTalkWithMachineGods');
channel.onmessage = function (ev) {location.reload(); 
   }
   let from = new Date(localStorage.getItem('date')).getTime();
   topi.innerHTML = localStorage.getItem('otsikko');
   let T = setInterval(function(){
    let to = new Date().getTime();
    let duration = from - to;
    var day = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hour = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((duration % (1000 * 60)) / 1000);
    document.getElementById("aika").innerHTML = day + "d " + hour + "h "
    + min + "m " + sec + "s ";
    if (duration < 0) {
        clearInterval(T);
        document.getElementById("aika").innerHTML = "";
        document.getElementById("topi").innerHTML = localStorage.getItem('message');
      }
    });