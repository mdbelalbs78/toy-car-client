import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../Blog/Blog";
import AllToy from "../pages/AllToy/AllToy";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";
import ViewPage from "../pages/ViewPage/ViewPage";
import Update from "../pages/Update/Update";


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
      {
        path: '/login',
        element: <Login></Login>
      } ,
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'allToy',
        element: <AllToy></AllToy>
      },
      {
        path: '/updateToy/:id',
        element: <Update></Update>
      },
      {
         path: 'view/:id',
         element: <ViewPage></ViewPage>,
         loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'myToy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'addToy',
        element: <AddToy></AddToy>
      }
    ],
  },
]);

export default router;
