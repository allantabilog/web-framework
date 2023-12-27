import { lipsum } from "../utils/lipsum";
import { describe, test, expect } from "vitest";

describe("lipsum", () => {
  test("lipsum works", () => {
    let fragment = lipsum(1);
    console.log(fragment);
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
