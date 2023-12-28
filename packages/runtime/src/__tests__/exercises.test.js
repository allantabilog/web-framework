import { h, hString } from "../h";
import { test, expect } from "vitest";
import { jplog } from "../utils/print";

function MessageComponent(message) {
  let className = "";

  switch (message.level) {
    case "info":
      className = "message--info";
      break;
    case "warning":
      className = "message--warning";
      break;
    case "error":
      className = "message--error";
      break;
    default:
      throw new Error(`Unknown message level ${message.level}`);
  }

  return h("div", { class: `message ${className}` }, [
    h("p", {}, [hString(message.text)]),
  ]);
}

test("renders an info message component", () => {
  let message1 = MessageComponent({ level: "info", text: "Hello world" });
  expect(message1).toMatchObject({
    tag: "div",
    props: { class: "message message--info" },
    children: [
      {
        tag: "p",
        props: {},
        children: [{ type: "text", value: "Hello world" }],
        type: "element",
      },
    ],
    type: "element",
  });

  let message2 = MessageComponent({ level: "warning", text: "Hello world" });
  expect(message2).toMatchObject({
    tag: "div",
    props: { class: "message message--warning" },
    children: [
      {
        tag: "p",
        props: {},
        children: [{ type: "text", value: "Hello world" }],
        type: "element",
      },
    ],
    type: "element",
  });

  let message3 = MessageComponent({ level: "error", text: "Hello world" });
  expect(message3).toMatchObject({
    tag: "div",
    props: { class: "message message--error" },
    children: [
      {
        tag: "p",
        props: {},
        children: [{ type: "text", value: "Hello world" }],
        type: "element",
      },
    ],
    type: "element",
  });
});
