import {
  createApp,
  h,
  hString,
  hFragment,
} from "https://unpkg.com/at-framework-runtime@1.1.1";

/**
 * I feel that now the state is less intuitive for the developer.
 * (Not as declarative as say, with React)
 * Because the developer now needs to worry about what's being edited, etc.
 */
const state = {
  currentTodo: "",
  edit: {
    idx: null,
    original: null,
    edited: null,
  },
  todos: ["Walk the dog", "Water the plants"],
};

// and lots more events to handle
// compared to the plain-vanilla version
const reducers = {
  "update-current-todo": (state, currentTodo) => ({
    ...state,
    currentTodo,
  }),
  "add-todo": (state) => ({
    ...state,
    currentTodo: "",
    todos: [...state.todos, state.currentTodo],
  }),
  "start-editing-todo": (state, idx) => ({
    ...state,
    edit: {
      idx,
      original: state.todos[idx],
      edited: state.todos[idx],
    },
  }),
  "edit-todo": (state, edited) => ({
    ...state,
    edit: {
      ...state.edit,
      edited,
    },
  }),
  "save-edited-todo": (state) => {
    const todos = [...state.todos];
    todos[state.edit.idx] = state.edit.edited;

    return {
      ...state,
      edit: { idx: null, original: null, edited: null },
      todos,
    };
  },
  "cancel-editing-todo": (state) => ({
    ...state,
    edit: { idx: null, original: null, edited: null },
  }),
  "remove-todo": (state, idx) => ({
    ...state,
    todos: state.todos.filter((_, i) => i !== idx),
  }),
};

// the view.
function App(state, emit) {
  return hFragment([
    h("h1", {}, ["My TODOs"]),
    CreateTodo(state, emit), // a create component
    TodoList(state, emit), // a list component
  ]);
}

function CreateTodo(state, emit) {
  // a div that contains a label, the input and the button
  let currentTodo = state.currentTodo;
  return h("div", {}, [
    h("label", {}, [hString("New todo")]),
    h("input", {
      type: "text",
      id: "todo-input",
      value: currentTodo,
      on: {
        input: ({ target }) => emit("update-current-todo", target.value),
        keydown: ({ key }) => {
          if (key === "Enter" && currentTodo.length >= 3) {
            emit("add-todo");
          }
        },
      },
    }),
    h(
      "button",
      {
        disabled: currentTodo.length < 3,
        on: { click: () => emit("add-todo") },
      },
      ["Add"]
    ),
  ]);
}

function TodoList(state, emit) {
  return h(
    "ul",
    {},
    state.todos.map((todo, i) => TodoItem({ todo, i, edit: state.edit }, emit))
  );
}

function TodoItem({ todo, i, edit }, emit) {
  const isEditing = edit.idx === i;

  // an example of conditional rendering
  // encoding the view may not be straightforward for complex components
  // I suppose a good strategy is to break down the view into smaller components
  return isEditing
    ? h("li", {}, [
        h("input", {
          value: edit.edited,
          on: {
            input: ({ target }) => emit("edit-todo", target.value),
          },
        }),
        h(
          "button",
          {
            on: { click: () => emit("save-edited-todo") },
          },
          ["Save"]
        ),
        h(
          "button",
          {
            on: { click: () => emit("cancel-editing-todo") },
          },
          ["Cancel"]
        ),
      ])
    : h("li", {}, [
        h(
          "span",
          {
            on: { dblclick: () => emit("start-editing-todo", i) },
          },
          [hString(todo)]
        ),
        h(
          "button",
          {
            on: { click: () => emit("remove-todo", i) },
          },
          ["Done"]
        ),
      ]);
}

createApp({ state, reducers, view: App }).mount(document.body);
