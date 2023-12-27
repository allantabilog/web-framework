/**
 * <h1 class="title">My counter</h1>
<div class="container">
  <button>decrement</button>
  <span>0</span>
  <button>increment</button>
</div>
 */

import { h, hFragment, hString } from "../h";

function test() {
  return hFragment(
    h("h1", { class: "title" }, [hString("My counter")]),
    h("div", { class: "container" }, [
      h("button", {}, [hString("decrement")]),
      h("span", {}, [hString("0")]),
      h("button", {}, [hString("increment")]),
    ])
  );
}
