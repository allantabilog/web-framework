import { hFragment, hString } from "../h";

export function lipsum(n) {
  let children = [];

  for (i = 0; i < n; i++) {
    children.push(
      hString(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      )
    );
  }

  return hFragment(children);
}
