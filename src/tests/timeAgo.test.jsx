import { isBetweenDates, toTimeAgo } from "../utils/timeAgo";
import { describe, expect, test } from "@jest/globals";
import dayjs from "dayjs";

describe("Is Date format correct", () => {
  test("Have a correct form", () => {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    expect(toTimeAgo("2023-10-27T02:30:26-06:00")).not.toBe("today");
    expect(toTimeAgo(dayjs(currentDate).format())).toBe("today");
    expect(
      toTimeAgo(dayjs(tomorrow.setDate(currentDate.getDate() + 1)).format()),
    ).toBe("tomorrow");
    expect(
      toTimeAgo(dayjs(tomorrow.setDate(currentDate.getDate() + 2)).format()),
    ).toBe("in 2 days");
  });
});

describe("Validate between dates", () => {
  test("Is date today or tomorrow", () => {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    expect(isBetweenDates(dayjs(Date.now()).format())).toBe(true);
    expect(isBetweenDates(tomorrow.setDate(currentDate.getDate() + 1))).toBe(
      true,
    );
    expect(isBetweenDates(tomorrow.setDate(currentDate.getDate() + 2))).toBe(
      false,
    );
  });
});
