import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layout
import IndexLayout from "./layouts/IndexLayout"

// pages
import Home from "./pages/Home"
import Skills from "./pages/Skills"

const router = createBrowserRouter([{
  path: "/",
  element: <IndexLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "skills",
      element: <Skills />,
    },
    {
      path: "projects",
      element: <>projects</>,
    },
    {
      path: "resume",
      element: <>resume</>,
    },
    {
      path: "contact",
      element: <>contact</>,
    },
  ]
}])

function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
