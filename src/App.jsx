import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Login from './pages.jsx/Login';
import Signup from './pages.jsx/Signup';
import LandingPage from './components/LandingPage';
import Dashboard from './pages.jsx/Dashboard';
import Navbar from './components/Navbar';
import CreateJob from './pages.jsx/CreateJob';


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
       
        <LandingPage/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
          <Navbar/>
          <Dashboard/>
      </div>
    },
    {
      path:"/login",
      element:
      <div>
        <Login/>
      </div>
    },
    {
      path:"/signup",
      element:
      <div>
        <Signup/>
      </div>
    },
    {
      path:"/create",
      element:
      <div>
        <Navbar/>
        <CreateJob/>
      </div>
    },
    

  ]
)

function App() {


  return (
   <RouterProvider router={router}/>
  )
}

export default App
