import { h } from "../h";
import { test, expect } from "vitest";
import { jplog } from "../utils/print";

const MessageComponent = (message) =>
  h("div", { class: `message message--${message.level}` }, [
    h("p", {}, [message.text]),
  ]);

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
