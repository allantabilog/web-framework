import { lipsum } from "../utils/lipsum";
import { jp } from "../utils/print";
import { describe, test, expect } from "vitest";

describe("lipsum", () => {
  test("lipsum works", () => {
    let fragment = lipsum(1);
    jp(fragment);
    expect(fragment).toMatchObject({
      type: "fragment",
      children: [
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    });
  });
});

describe("jplog tests", () => {
  test("test jplog", () => {
    expect(jp({ name: "joe" })).toBe('log: {"name":"joe"}');
    expect(jp({ name: "joe" }, 0, "logging")).toBe('logging: {"name":"joe"}');
  });
});
