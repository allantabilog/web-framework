import { hFragment, hString } from "../h";

export function lipsum(n) {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return hFragment(Array.from({ length: n }, () => hString(text)));

  // or even more concisely:
  // Array(n).fill(h('p', {}, [text]))
}
