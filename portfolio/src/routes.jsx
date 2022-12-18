import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Hero from "./Components/Hero";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
