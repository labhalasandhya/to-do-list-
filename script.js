function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  // Click on text to toggle complete
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "task-buttons";

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonContainer);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}