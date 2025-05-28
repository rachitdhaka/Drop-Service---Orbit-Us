import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <LandingPage/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
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
    }

  ]
)

function App() {


  return (
   <RouterProvider router={router}/>
  )
}

export default App
