import { describe, test, expect } from "vitest";
import { Dispatcher } from "../dispatcher";

describe("dispatcher tests", () => {
  test("basic test", () => {
    const dispatcher = new Dispatcher();

    const unregister = dispatcher.subscribe("greet", (name) => {
      console.log(`hello there ${name}`);
    });
    dispatcher.dispatch("greet", "joe");
    dispatcher.dispatch("greet", "joey");
    dispatcher.dispatch("greet", "john");
    unregister();
    dispatcher.dispatch("greet", "peter"); // will not trigger
  });
});
