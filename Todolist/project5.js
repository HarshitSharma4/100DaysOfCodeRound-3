let input = document.getElementById("input");
let addinput = document.getElementsByClassName("addinput");
let taskcontainer = document.getElementById("taskcontainer");

addinput[0].addEventListener("click", () => {
  console.log("enter");
  if (input.value === "") {
    alert("please enter task");
  } else {
    let newTask = document.createElement("div");
    let task = document.createElement("h3");
    task.innerHTML = `${input.value}`;
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

    input.value = "";
    let status = false;
    checkbtn.addEventListener("click", () => {
      if (status === false) {
        checkbtn.parentElement.parentElement.style.textDecoration =
          "line-through";
          checkbtn.parentElement.parentElement.style.textDecorationThickness="3px";
          checkbtn.parentElement.parentElement.style.textDecorationColor="gray";
        checkbtn.style.backgroundColor = "#0aee37";
        checkbtn.style.color = "#fff";
        status = true;
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
    });
  }
});
