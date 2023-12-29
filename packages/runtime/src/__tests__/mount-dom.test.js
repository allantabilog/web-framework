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
    const vdom = hString("Hello world");
    // mount it to a DOM node
    mountDOM(vdom, jsdom.window.document.body);
    // test the generated DOM
    console.log(`Updated dom: ${jsdom.window.document.body.innerHTML}`);
    jplog(vdom);
  });
});

describe("getting started with jsdom", () => {
  test("jsdom hello world", () => {
    let dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

    let p = dom.window.document.querySelector("p");
    p.innerHTML = "Hello world 2";

    console.log(dom.window.document.querySelector("p").textContent); // "Hello world 2"
  });
});
