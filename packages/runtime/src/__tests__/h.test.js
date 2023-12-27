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
  console.log(hString("hello"));
  console.log(h("h1", { class: "title" }, [hString("My counter")]));

  let h1_title = h("h1", { class: "title" }, [hString("My counter")]);
  let h2_name = h("h2", { class: "name" }, [hString("My counter")]);

  let fragments = hFragment([h2_name, h1_title]);
  console.log(fragments);

  let fragmentsWithNull = hFragment([h2_name, null, h1_title]);
  console.log(fragmentsWithNull);
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

  console.log(JSON.stringify(fragment, null, 2));
});
