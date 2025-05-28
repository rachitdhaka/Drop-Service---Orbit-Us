import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Login from './components/Login';
import Signup from './components/Signup';


const router=createBrowserRouter(
  [
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
