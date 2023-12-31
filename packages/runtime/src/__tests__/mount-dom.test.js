import { describe, test, expect, beforeAll } from "vitest";
import { jplog } from "../utils/print";
import { h, hString } from "../h";
import { mountDOM } from "../mount-dom";
import { destroyDOM } from "../destroy-dom";
import { JSDOM } from "jsdom";

/**
 * Ahhh. How to test DOM manipulation in vitest?
 * Need something like JSDOM.
 */
describe("getting started with jsdom", () => {
  test("jsdom hello world", () => {
    let dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

    let p = dom.window.document.querySelector("p");
    p.innerHTML = "Hello world 2";

    console.log(dom.window.document.querySelector("p").textContent); // "Hello world 2"
  });
});

const jsdom = new JSDOM(`<!DOCTYPE html><body><div id='app'></div></body>`);
describe("mountDOM tests", () => {
  beforeAll(() => {
    // get the window object out of the JSDOM instance, etc.
    global.document = jsdom.window.document;
    global.window = jsdom.window;
  });

  test("simple test", () => {
    // create a vdom
    const vdom = hString("Hello world");
    // mount it to a DOM node
    let app = document.getElementById("app");
    mountDOM(vdom, app);
    // test the generated DOM
    jplog(vdom, "vdom", 2);
    jplog(app, "jsdom");
    // remove the mounted DOM
    destroyDOM(vdom, app);
  });

  test("simple test 2", () => {
    const vdom = h("section", {}, [
      h("h1", {}, ["My blog"]),
      h("p", {}, ["Welcome to my blog!"]),
    ]);

    let app = document.getElementById("app");
    mountDOM(vdom, app);
    jplog(vdom, "vdom");
    jplog(jsdom.window.document.body.innerHTML, "jdom");
    destroyDOM(vdom, app);
  });
});
