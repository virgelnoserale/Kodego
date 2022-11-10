const todo = ["Breakfast", "Check a Email", " Start Working(Coloring)", "Lunch", "Back to work", "Do a exercises or practice(WD)", "Dinner", "Class At KodeGo", "It's time to play games(Tetres) hahaha" ];
console.log(todo);

let x = 0;
while (x < todo.length){
    let todoLi = document.createElement('li');
    todoLi.innerHTML = todo[x];
     x++;   
document.getElementById("list-todo").appendChild(todoLi);  

}
  
console.log("---------------------------------------");
console.log("Connection testing");
console.log("---------------------------------------");
                            
