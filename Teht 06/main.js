let THEDATE = new Date("Feb 7, 2020 12:12:12").getTime();
let T = setInterval(function(){
    let now = new Date().getTime();
    let distance = THEDATE - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("aika").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("aika").innerHTML = "Jee.... Paljon onnea";
      }
    }, 1000);

console.log(THEDATE);
function duration(from, to){
    console.log(duration(10, 20));
}
