import { h } from "../h";
import { describe, test, expect } from "vitest";
import { jplog } from "../utils/print";

describe("simple component building tests", () => {
  test("title component", () => {
    const titleComponent = TitleComponent("Hello world");
    expect(titleComponent).toMatchObject({
      tag: "h1",
      props: { class: "title" },
      children: [
        {
          tag: "span",
          props: {},
          children: [{ type: "text", value: "Hello world" }],
          type: "element",
        },
      ],
      type: "element",
    });
  });

  test("simple form component", () => {
    const form = SimpleForm();
    expect(form).toMatchObject({
      tag: "form",
      props: {},
      children: [
        {
          tag: "input",
          props: { type: "text" },
          children: [],
          type: "element",
        },
        {
          tag: "button",
          props: {},
          children: [
            {
              tag: "span",
              props: {},
              children: [{ type: "text", value: "Submit" }],
              type: "element",
            },
          ],
          type: "element",
        },
      ],
      type: "element",
    });
    jplog(form);
  });
});

const TitleComponent = (title) =>
  h("h1", { class: "title" }, [h("span", {}, [title])]);

const SimpleForm = () =>
  h("form", {}, [
    h("input", { type: "text" }, []),
    h("button", {}, [h("span", {}, ["Submit"])]),
  ]);
