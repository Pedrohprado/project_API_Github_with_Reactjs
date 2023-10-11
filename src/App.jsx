import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";

import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Normalize />
    </>
  );
}
