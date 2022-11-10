let num1 = " ";
let result1 = " ";
function oddEven(){
  num1 = parseInt(document.getElementById("enter-num").value);
    if(num1){
    result1 = document.getElementById("result-section");
      if(num1 % 2==0)
        document.getElementById("result").innerHTML = "[" + num1 + "] - " + " Even Number";
      else
        document.getElementById("result").innerHTML = "[" + num1 + "] - " + " Odd Number";
     
    }
}