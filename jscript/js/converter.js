function tempConverter(faNum) {
  faNum = parseInt(faNum);
  document.getElementById("result").innerHTML=(faNum -32) / 1.8; 
}

function tempConverter1(celNum) {
  celNum = parseInt(celNum);
  document.getElementById("result1").innerHTML=(celNum * 1.8) + 32; 
}

console.log("---------------------------------------");
console.log("Connection testing");
console.log("---------------------------------------");