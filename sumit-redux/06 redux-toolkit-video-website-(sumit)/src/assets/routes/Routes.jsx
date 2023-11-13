import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import Home from "../page/Home/Home.jsx";
import NotFound from "../page/NotFound/NotFound.jsx";
import Video from "../page/Video/Video.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/video/:videoId",
        element: <Video />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
