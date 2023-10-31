import React from "react";
import { render, screen } from "@testing-library/react";

import ColusTrainingSimpleAppJsonEditDialogComponent from "../ColusTrainingSimpleAppJsonEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders colusTrainingSimpleAppJson edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ColusTrainingSimpleAppJsonEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("colusTrainingSimpleAppJson-edit-dialog-component")).toBeInTheDocument();
});
