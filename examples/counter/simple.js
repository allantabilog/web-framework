import {
  createApp,
  hString,
  hFragment,
  h,
} from "https://unpkg.com/at-framework-runtime@1.1.1";

createApp({
  state: { count: 0 },
  reducers: {
    add: (state) => ({
      count: state.count + 1,
    }),
    sub: (state) => ({
      count: state.count - 1,
    }),
  },
  view: (state, emit) =>
    hFragment([
      h("h1", {}, [hString("My counter")]),
      h("button", { on: { click: () => emit("sub") } }, [hString("sub 1")]),
      h("div", {}, [hString(state.count)]),
      h("button", { on: { click: () => emit("add") } }, [hString("add 1")]),
    ]),
}).mount(document.body);
