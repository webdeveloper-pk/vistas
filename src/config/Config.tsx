import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preloader from "../components/preLoader/PreLoader";

const Homepage = lazy(() => import("../pages/Homepage"));
const Playerstab = lazy(() => import("../pages/Playerstab"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "players-tab",
    element: <Playerstab />,
  },
]);

const Config = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Config;
