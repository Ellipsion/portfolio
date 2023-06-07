import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import Container from "./components/Container"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import WidgetButton from "./components/buttons/WidgetButton"

import { AiOutlineMenu } from "react-icons/ai"

function App() {

  return (
    <Layout >
      <Sidebar />
      <Container >

        <a className='bg-black md:hidden text-gray-100 z-10 fixed bottom-10 right-8 w-[50px] h-[50px] cursor-pointer p-4 flex items-center justify-center rounded-full font-normal text-sm shadow-neumorphic'>
          <AiOutlineMenu className="w-5" />
        </a>
        <Home />
        <Footer />
      </Container>
    </Layout>
  )
}

export default App
