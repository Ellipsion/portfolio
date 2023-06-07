import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layout
import IndexLayout from "./layouts/IndexLayout"

// pages
import Home from "./pages/Home"

const router = createBrowserRouter([{
  path: "/",
  element: <IndexLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "projects",
      element: <>projects</>,
    }
  ]
}])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
