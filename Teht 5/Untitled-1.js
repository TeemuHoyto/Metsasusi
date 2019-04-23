//function printNum(input){
// let i = 1
// for ( i = 1; i<=input; i++){
//   print.innerHTML+= i + " ";
 //}



 
   // if (i === 0) {
      print.innerHTML+= i + " ";
   //   continue;
   // } else if (i % 3 === 0) {
   //   print.innerHTML+= i + " ";
    

    document.getElementById('btn').onclick = function(){
    var totalIterations = parseInt(document.getElementById('input').value);
    var output = document.getElementById('output');
    output.innerHTML = '';
    for(var i = 1; i <= totalIterations; i ++) {
        var item = document.createElement('div');
        item.innerHTML = i;
        output.appendChild(item);
    }
};







console.log(nums);
myFunction();
function getSum(total, num) {
  console.log("shutbag "+nums); 
  return total + num;
 
}
function myFunction() {
  document.getElementById("printter").innerHTML = nums.reduce(getSum);
  
}