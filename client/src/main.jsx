import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import { getAllCategories, getCategory, createCategory, editCategory } from "./CategoryFunctions";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import CategoryEdit from "./pages/CategoryEdit";
import { getAllPrograms, getProgram, createProgram, editProgram } from "./ProgramFunction";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import ProgramEdit from "./pages/ProgramEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/categories",
        element: <Categories />,
        loader: getAllCategories,
        action: createCategory,
      },
      {
        path: "/categories/:id",
        element: <CategoryDetails />,
        loader: getCategory,
      },
      {
        path: "/categories/:id/edit",
        element: <CategoryEdit />,
        loader: getCategory,
        action: editCategory,
      },
      {
        path: "/programs",
        element: <Programs />,
        loader: getAllPrograms,
        action: createProgram,
      },
      {
        path: "/programs/:id",
        element: <ProgramDetails />,
        loader: getProgram,
      },
      {
        path: "/programs/:id/edit",
        element: <ProgramEdit />,
        loader: getProgram,
        action: editProgram,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
