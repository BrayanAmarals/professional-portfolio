import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";

const routes = createBrowserRouter([
  {
    path: "/professional-portfolio",
    index: "true",
    element: <Home />,
  },
]);

export default routes;
