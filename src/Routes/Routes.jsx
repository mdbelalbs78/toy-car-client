import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import img1 from '../../../../../../../../Batch7/MongoDB/regular-toy-cars/src/assets/404.png'
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      

    
    ],
  },
]);

export default router;
