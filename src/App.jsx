import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import IndexLayout from "./layouts/IndexLayout"

// pages
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import ProjectsOld from "./pages/Projects-old"
import Resume from "pages/Resume";
import Contact from "pages/Contact";
import ProjectDetail from "pages/ProjectDetail";
import Crystal from "components/babylon/Crystal";

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

      children: [
        {
          index: true,
          element: <ProjectsOld />,
        },
        {
          path: ":slug",
          element: <ProjectDetail />
        },
      ]
    },
    {
      path: "resume",
      element: <Resume />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]
}])

export const LoadingContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <RouterProvider router={router} />
    </LoadingContext.Provider>

  )
}

export default App
