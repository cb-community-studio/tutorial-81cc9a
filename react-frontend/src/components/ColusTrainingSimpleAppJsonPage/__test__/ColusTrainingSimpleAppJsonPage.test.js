import React from "react";
import { render, screen } from "@testing-library/react";

import ColusTrainingSimpleAppJsonPage from "../ColusTrainingSimpleAppJsonPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders colusTrainingSimpleAppJson page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ColusTrainingSimpleAppJsonPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("colusTrainingSimpleAppJson-datatable")).toBeInTheDocument();
    expect(screen.getByRole("colusTrainingSimpleAppJson-add-button")).toBeInTheDocument();
});
