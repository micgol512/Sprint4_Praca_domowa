const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("addBtn");
const listTasks = document.getElementById("listTasks");
console.log(listTasks);

btnAdd.addEventListener("click", function () {
  if (inputTask.value) {
    const newTask = document.createElement("li");
    const newTextTask = document.createElement("input");
    newTextTask.value = inputTask.value;
    newTextTask.disabled = true;
    newTask.append(newTextTask);
    createBtn(newTask);
    listTasks.prepend(newTask);
    inputTask.value = "";
  } else {
    alert("Nazwa zadania nie może być pusta!!!");
  }
});

function createBtn(parent) {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edytuj";
  editBtn.setAttribute("class", "modifityBtn");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Usuń";
  deleteBtn.setAttribute("class", "deleteBtn");
  parent.append(editBtn);
  parent.append(deleteBtn);
  editBtn.addEventListener("click", function () {
    if (editBtn.textContent === "Edytuj") {
      editBtn.textContent = "Zatwierdź zmiany";
      parent.firstChild.disabled = false;
    } else if (
      editBtn.textContent === "Zatwierdź zmiany" &&
      parent.firstChild.value
    ) {
      editBtn.textContent = "Edytuj";
      parent.firstChild.disabled = true;
    } else alert("Nazwa zadania nie może być pusta!!!");
  });
  deleteBtn.addEventListener("click", function () {
    parent.remove();
  });
}
