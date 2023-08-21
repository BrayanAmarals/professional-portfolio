import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";

const routes = createBrowserRouter([
  {
    path: "/professional-portfolio",
    element: <Home />,
  },
  {
    path: "/",
    index: "true",
    element: <Home />,
  },
]);

export default routes;
