import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { createBrowserRouter} from "react-router-dom"
import { RouterProvider} from "react-router-dom"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },

  ])
  return (
    <div>
     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
