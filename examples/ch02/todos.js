// the state of the app
const todos = [
  { description: "Walk  the dog", done: false },
  { description: "Clean the kitchen", done: false },
  { description: "Cook dinner", done: false },
  { description: "Wash the car", done: false },
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
  if (!todo.done) {
    const todoItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todo.description;

    span.addEventListener("dblclick", () => {
      const idx = todos
        .map((item) => item.description)
        .indexOf(todo.description);
      todosList.replaceChild(
        renderTodoInEditMode(todo),
        todosList.children[idx]
      );
    });
    todoItem.append(span);

    const button = document.createElement("button");
    button.textContent = "Done";
    button.addEventListener("click", () => {
      console.log("clicked Done");
      const idx = todos
        .map((item) => item.description)
        .indexOf(todo.description);
      console.log(`Found index: ${idx}`);
      removeTodo(idx);
    });
    todoItem.append(button);
    return todoItem;
  } else {
    const todoItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todo.description;
    span.className = "done";
    todoItem.append(span);

    return todoItem;
  }
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
  todos[index].done = true;
  const todo = renderTodoInReadMode(todos[index]);
  todosList.replaceChild(todo, todosList.children[index]);
}

function updateTodo(index, description) {
  todos[index] = { description, done: false };
  const todo = renderTodoInReadMode(todos[index]);
  todosList.replaceChild(todo, todosList.children[index]);
}
