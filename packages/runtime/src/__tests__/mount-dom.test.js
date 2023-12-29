import { describe, test, expect } from "vitest";
import { jplog } from "../utils/print";
import { h, hString } from "../h";
import { mountDOM } from "../mount-dom";
import { JSDOM } from "jsdom";

/**
 * Ahhh. How to test DOM manipulation in vitest?
 * Need something like JSDOM.
 */
describe("mountDOM tests", () => {
  test("simple test", () => {
    // create a new JSDOM instance
    const jsdom = new JSDOM(`<!DOCTYPE html><body></body>`);

    // get the window object out of the JSDOM instance, etc.
    global.document = jsdom.window.document;
    global.window = jsdom.window;

    // create a vdom
    const vdom = h("div", {}, [h("h1", {}, [hString("Interesting article")])]);
    // mount it to a DOM node
    mountDOM(vdom, jsdom.window.document.body);
    // test the generated DOM
    console.log(jsdom.window.document.body.innerHTML);
  });
});
