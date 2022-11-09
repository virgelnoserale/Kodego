const grocery =["Sugar", "Salt", "Rice", "Toyo", "Egg", "Vinegar", "Chicken", "Pork", "Beef", "CornedBeef", "Magic Sarap", "Fish", "Noodles", "Diswashing", "Soap", "Milk", "Coffee", "Milo", "Fruits", "Mineral Water"];
    

for (let i = 0; i < grocery.length; i++) {
  let groceryLi = document.createElement('li');
  groceryLi.innerHTML=grocery[i];
  document.getElementById("list-groceries").appendChild(groceryLi);
}

console.log("---------------------------------------");
console.log("Connection testing");
console.log("---------------------------------------");