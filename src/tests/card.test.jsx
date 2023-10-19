import React from "react";
import { describe, expect, test } from "@jest/globals";
import CardComponent from "../components/card.component";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';

describe("Should render a card", () => {
  test("Should display the data", () => {
    render(
      <CardComponent
        priority="high"
        text="Lorem ipsum 1"
        status="active"
        id={5}
        dueDate={"2023-10-27T02:30:26-06:00"}
        handleStatus={() => {}}
      />,
    );
	expect(screen.getByText('high')).toBeInTheDocument()
	expect(screen.getByText('Lorem ipsum 1')).toBeInTheDocument()
	expect(screen.getByText('Active')).toBeInTheDocument()
	//expect(screen.getByText('in 8 days')).toBeInTheDocument()
  });
});
