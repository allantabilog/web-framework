import {
  createApp,
  hFragment,
  h,
  hString,
} from "https://unpkg.com/at-framework-runtime@1.1.0";

createApp({
  state: 0,
  reducers: {
    add: (state, amount) => state + amount,
    sub: (state, amount) => state - amount,
  },
  view: (state, emit) => {
    return hFragment([
      h("h1", {}, [hString("My counter")]),
      h("div", {}, [
        h("button", { on: { click: () => emit("sub", 1) } }, ["-"]),
        h("span", {}, [hString(state)]),
        h("button", { on: { click: () => emit("add", 1) } }, ["+"]),
      ]),
    ]);
  },
}).mount(document.body);
