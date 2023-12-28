import { h, hString } from "../h";
import { test, expect } from "vitest";
import { jp, jplog } from "../utils/print";

function todoList(todos) {
  return h(
    "ul",
    {},
    todos.map((todo) => {
      return h("li", {}, [hString(todo.description)]);
    })
  );
}

// a pure function that takes a todo state and renders a vdom
test("rendering a vdom from state", () => {
  let todos = [{ description: "Learn JavaScript" }];
  let todosList1 = todoList(todos);
  expect(todoList(todos)).toMatchObject({
    tag: "ul",
    props: {},
    children: [
      {
        tag: "li",
        props: {},
        children: [{ type: "text", value: "Learn JavaScript" }],
        type: "element",
      },
    ],
    type: "element",
  });

  todos = [{ description: "Learn JavaScript" }, { description: "Learn Rust" }];
  expect(todoList(todos)).toMatchObject({
    tag: "ul",
    props: {},
    children: [
      {
        tag: "li",
        props: {},
        children: [{ type: "text", value: "Learn JavaScript" }],
        type: "element",
      },
      {
        tag: "li",
        props: {},
        children: [{ type: "text", value: "Learn Rust" }],
        type: "element",
      },
    ],
    type: "element",
  });
});
