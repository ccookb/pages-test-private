
import React from "react";
import {Primary, Secondary,Large,Small} from "../stories/Button/Button.stories";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


test("should render primary button", ()=> {
    render(<Primary primary={true} label="button" />);
    expect(screen.getByRole("button")).toHaveTextContent(/button/i)
});
test("should render secondary button", ()=> {
    render(<Secondary primary={false} label="button" />);
    expect(screen.getByRole("button")).toHaveTextContent(/button/i)
});
test("should render large button", ()=> {
    render(<Large primary={false} label="button" size="small" />);
    expect(screen.getByRole("button")).toHaveTextContent(/button/i)
});
test("should render small button", ()=> {
    render(<Small primary={false} label="button" size="large" />);
    expect(screen.getByRole("button")).toHaveTextContent(/button/i)
});