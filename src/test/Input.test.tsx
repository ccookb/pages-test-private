import React from "react";
import {Primary, Secondary, Large, Small} from "../stories/Input/Input.stories";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test("should render primary input", ()=> {
    render(<Primary primary={true} label="input" />);
   
});
test("should render secondary input", ()=> {
    render(<Secondary primary={false} label="input" />);
   
});
test("should render large input", ()=> {
    render(<Large primary={false} label="input" size="small" />);
   
});
test("should render small input", ()=> {
    render(<Small primary={false} label="input" size="large" />);
    
});