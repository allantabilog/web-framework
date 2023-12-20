// the state of the app
const todos = [
  "Walk  the dog",
  "Clean the kitchen",
  "Cook dinner",
  "Wash the car",
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
  span.textContent = todo;
  span.addEventListener("dblclick", () => {
    const idx = todos.indexOf(todo);

    todosList.replaceChild(renderTodoInEditMode(todo), todosList.children[idx]);
  });
  todoItem.append(span);

  const button = document.createElement("button");
  button.textContent = "Done";
  button.addEventListener("click", () => {
    const idx = todos.indexOf(todo);
    removeTodo(idx);
  });
  todoItem.append(button);
  return todoItem;
}

function removeTodo(index) {
  //@todo. implement this
}
function addTodo() {
  //@todo. implement this
}

function foobar() {}
function foobarbaz() {}
