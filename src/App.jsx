import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Login from './components/Login';


const router=createBrowserRouter(
  [
    {
      path:"/login",
      element:
      <div>
        <Login/>
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
