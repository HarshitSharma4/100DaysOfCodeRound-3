var todos =[];

let input = document.getElementById("input");
let addinput = document.getElementsByClassName("addinput");
let taskcontainer = document.getElementById("taskcontainer");
let Name = document.getElementById("Name");

Name.addEventListener('keypress',(e)=>{
  console.log(e);
   if(e.key === 'Enter'){

     localStorage.setItem('user',e.target.value);
     
      input.focus();
   }
   
})

Name.addEventListener('change',e =>{
     localStorage.setItem('user',e.target.value);
  
})


addinput[0].addEventListener("click", () => {
  
  if (input.value === "") {
    alert("please enter task");
  } else {
   createTodoList();
   input.value = "";
  }
});

input.addEventListener("keypress", (e) => {
  console.log("enter is press");
  if(e.key === 'Enter'){
    if (input.value === "") {
      alert("please enter task");
    } else {
     createTodoList(input.value);
     input.value = "";
    }
  }
  
});



let createTodoList = (userTask,status=false,check=true)=>{
  let newTask = document.createElement("div");
  let task = document.createElement("h3");
  task.innerHTML = `${userTask}`;
  newTask.classList.add("task");
  newTask.append(task);

  let btn = document.createElement("div");
  // check button
  let checkbtn = document.createElement("button");
  checkbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkbtn.classList.add("checkbtn");
  btn.append(checkbtn);

  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = `<i class="fa-sharp fa-solid fa-minus"></i>`;
  deletebtn.classList.add("deletebtn");
  btn.append(deletebtn);

  newTask.append(btn);

  taskcontainer.appendChild(newTask);
  if(check){
   
  let todo = {
    event:userTask,
    statues:status
  }
  todos.push(todo);
  localStorage.setItem('todos',JSON.stringify(todos));

  }
  
  checkbtn.addEventListener("click", () => {
    if (status === false) {
      checkbtn.parentElement.parentElement.style.textDecoration =
        "line-through";
        checkbtn.parentElement.parentElement.style.textDecorationThickness="3px";
        checkbtn.parentElement.parentElement.style.textDecorationColor="gray";
      checkbtn.style.backgroundColor = "#0aee37";
      checkbtn.style.color = "#fff";
      status = true;
      //change status


    } else {
      checkbtn.parentElement.parentElement.style.textDecoration =
      "none";
     
    checkbtn.style.backgroundColor = "#fff";
    checkbtn.style.color = "#0aee37";
    status = false;

    }
  });
   
  deletebtn.addEventListener('click',()=>{
      deletebtn.parentElement.parentElement.remove();
      //delete item 

  });

}
function displayTodos(){
    todos.forEach((element)=>{
        console.log(element);
        createTodoList(element.event,element.statues,false);
    })
   
}

window.addEventListener('load',()=>{
  const user = localStorage.getItem('user') || '';
  Name.value = user;
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  console.log(todos);
  displayTodos();
})