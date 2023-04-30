import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Question from "./components/QA/question";
import Early from "./components/QA/openreward";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Register from "./components/pages/register";
import Login from "./components/pages/login";


const router=createBrowserRouter([
    
    {
        path:'/',
        element:<Home/>,
        
    },

   {
    path:'/question',
    element:<Question/>,
    
   },

 {
    path:'/early',
    element:<Early/>,
    
   },
   {
    path:'/admin/*',
    element:<AdminDashboard/>,
    
   },
   {
    path:'/eyoofun/register',
    element:<Register/>,
    
   },
   {
    path:'/eyoofun/login',
    element:<Login/>,
    
   }

])

export default router;