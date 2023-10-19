/* eslint-disable no-unused-vars */
import React from "react";
import { describe, expect, test } from "@jest/globals";
import CardComponent from "../components/card.component";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import dayjs from "dayjs";

describe("Should render a card", () => {
  test("Should display the data", () => {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 3);
    render(
      <CardComponent
        priority="high"
        text="Lorem ipsum 1"
        status="active"
        id={5}
        dueDate={dayjs(tomorrow.setDate(currentDate.getDate() + 2)).format()}
        handleStatus={() => {}}
      />,
    );
    expect(screen.getByText("high")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum 1")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("in 2 days")).toBeInTheDocument();
  });
});
