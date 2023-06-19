import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import IndexLayout from "./layouts/IndexLayout"

// pages
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Resume from "pages/Resume";
import Contact from "pages/Contact";
import ProjectDetail from "pages/ProjectDetail";

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
      element: <Projects />,
    },
    {
      path: "project/:slug",
      element: <ProjectDetail />
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

function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
