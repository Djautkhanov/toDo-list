let arr = [
 
];

const list = document.getElementById("list");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function render(app) {
  list.innerHTML = "";
  for (let i = 0; i < app.length; i++) {
    let task = document.createElement("div");
    let taskText = document.createElement("div");
    let delt = document.createElement("bottom");
    let checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = arr[i].done;

    
    checkbox.addEventListener("click", (e) => {
        checkTodo(i);
    });

    if (checkbox.checked === true) {
      taskText.classList.add("task-done");
    }

    delt.addEventListener("click", (e) => {
      remove(i);
    });

    delt.textContent = "x";

    delt.classList.add("btn-delete");
    task.classList.add("task");

    taskText.textContent = app[i].text;

    list.append(task);
    task.append(taskText);
    task.append(delt);
    task.prepend(checkbox);
  }
}
render(arr);

function remove(index) {
  arr.splice(index, 1);
  render(arr);
}

function addTodo() {
  const inp = document.querySelector("input");

  if (inp.value) {
    const data = inp.value;
    let obj = {
      text: data,
      done: false,
    };
    arr.push(obj);
    inp.value = "";
  }
  render(arr);
}

function checkTodo(i) {
  arr[i].done = !arr[i].done;
  render(arr)
}
