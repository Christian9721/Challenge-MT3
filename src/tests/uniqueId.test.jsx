import { uniqueId } from "../utils/uniqueId";
import { describe, expect, test } from "@jest/globals";

describe("Generate a random ID", () => {
  test("Have length of 6", () => {
    expect(uniqueId(6)).toHaveLength(6);
  });
  test("Have length of 10", () => {
    expect(uniqueId(10)).toHaveLength(10);
  });
  test("Different IDs", () => {
    const id1 = uniqueId(10);
    const id2 = uniqueId(10);
    expect(id1).not.toBe(id2);
  });
});
