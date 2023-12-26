// the state of the app
const todos = [
  { description: "Walk  the dog", done: false },
  { description: "Clean the kitchen", done: false },
  { description: "Cook dinner", done: false },
  { describe: "Wash the car", done: false },
];

// HTML element references
const addTodoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-button");
const todosList = document.getElementById("todos-list");

// Initialize the view
for (const todo of todos) {
  todosList.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener("input", () => {
  addTodoButton.disabled = addTodoInput.value.length < 3;
});

addTodoInput.addEventListener("keydown", ({ key }) => {
  if (key === "Enter" && addTodoInput.value.length >= 3) {
    addTodo();
  }
});

addTodoButton.addEventListener("click", () => {
  addTodo();
});

function renderTodoInReadMode(todo) {
  const todoItem = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = todo.description;
  span.addEventListener("dblclick", () => {
    const idx = todos.map((item) => item.description).indexOf(todo.description);
    todosList.replaceChild(renderTodoInEditMode(todo), todosList.children[idx]);
  });
  todoItem.append(span);

  const button = document.createElement("button");
  button.textContent = "Done";
  button.addEventListener("click", () => {
    const idx = todos.map((item) => item.description).indexOf(todo.description);
    removeTodo(idx);
    // strikeThroughTodo(idx);
  });
  todoItem.append(button);
  return todoItem;
}

function renderTodoInEditMode(todo) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.description;
  li.append(input);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    const idx = todos.map((item) => item.description).indexOf(todo.description);
    updateTodo(idx, input.value);
  });
  li.append(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    const idx = todos.map((item) => item.description).indexOf(todo.description);
    todosList.replaceChild(renderTodoInReadMode(todo), todosList.children[idx]);
  });
  li.append(cancelBtn);

  return li;
}

function addTodo() {
  const newTodo = { description: addTodoInput.value, done: false };

  todos.push(newTodo);
  const todo = renderTodoInReadMode(newTodo);
  todosList.append(todo);

  addTodoInput.value = "";
  addTodoButton.disabled = true;
}

function removeTodo(index) {
  todos.splice(index, 1);
  todosList.removeChild(todosList.children[index]);
}

// function renderStrikedOutTodo(todo) {
//   const todoItem = document.createElement("li");
//   const span = document.createElement("span");
//   span.textContent = todo;
//   span.style.textDecoration = "line-through";
//   todoItem.append(span);

//   return todoItem;
// }

// function strikeThroughTodo(index) {
//   const todo = renderStrikedOutTodo(todos[index]);
//   todosList.replaceChild(todo, todosList.children[index]);
// }

function updateTodo(index, description) {
  todos[index] = description;
  const todo = renderTodoInReadMode(todos[index]);
  todosList.replaceChild(todo, todosList.children[index]);
}
