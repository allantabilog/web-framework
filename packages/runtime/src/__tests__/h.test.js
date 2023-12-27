/**
 * <h1 class="title">My counter</h1>
<div class="container">
  <button>decrement</button>
  <span>0</span>
  <button>increment</button>
</div>
 */

import { h, hFragment, hString } from "../h";
import { test, expect } from "vitest";

test("generates a virtual dom correctly", () => {
  let h1_1 = hString("hello");
  expect(h1_1).toMatchObject({ type: "text", value: "hello" });

  let h1_2 = h("h1", { class: "title" }, [hString("My counter")]);
  expect(h1_2).toMatchObject({
    tag: "h1",
    props: { class: "title" },
    children: [{ type: "text", value: "My counter" }],
    type: "element",
  });

  let h1_title = h("h1", { class: "title" }, [hString("My counter")]);
  let h2_name = h("h2", { class: "name" }, [hString("My counter")]);

  let fragments = hFragment([h2_name, h1_title]);
  expect(fragments).toMatchObject({
    type: "fragment",
    children: [
      {
        tag: "h2",
        props: { class: "name" },
        children: [{ type: "text", value: "My counter" }],
        type: "element",
      },
      {
        tag: "h1",
        props: { class: "title" },
        children: [{ type: "text", value: "My counter" }],
        type: "element",
      },
    ],
  });

  let fragmentsWithNull = hFragment([h2_name, null, h1_title]);
  expect(fragmentsWithNull).toMatchObject({
    type: "fragment",
    children: [
      {
        tag: "h2",
        props: { class: "name" },
        children: [{ type: "text", value: "My counter" }],
        type: "element",
      },
      {
        tag: "h1",
        props: { class: "title" },
        children: [{ type: "text", value: "My counter" }],
        type: "element",
      },
    ],
  });
});

test("generates a virtual dom correctly = part 2", () => {
  let fragment = hFragment([
    h("h1", { class: "title" }, [hString("My counter")]),
    h("div", { class: "container" }, [
      h("button", {}, [hString("decrement")]),
      h("span", {}, [hString("0")]),
      h("button", {}, [hString("increment")]),
    ]),
  ]);

  expect(fragment).toMatchObject({
    type: "fragment",
    children: [
      {
        tag: "h1",
        props: { class: "title" },
        children: [{ type: "text", value: "My counter" }],
        type: "element",
      },
      {
        tag: "div",
        props: { class: "container" },
        children: [
          {
            tag: "button",
            props: {},
            children: [{ type: "text", value: "decrement" }],
            type: "element",
          },
          {
            tag: "span",
            props: {},
            children: [{ type: "text", value: "0" }],
            type: "element",
          },
          {
            tag: "button",
            props: {},
            children: [{ type: "text", value: "increment" }],
            type: "element",
          },
        ],
        type: "element",
      },
    ],
  });
});

test("generate text nodes", () => {
  let div = h("div", { id: "test" }, ["hello"]);
  expect(div).toMatchObject({
    tag: "div",
    props: { id: "test" },
    children: [{ type: "text", value: "hello" }],
    type: "element",
  });
});
