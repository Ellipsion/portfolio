import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import Container from "./components/Container"
import Home from "./pages/Home"
function App() {

  return (
    <Layout >
      <Sidebar />
      <Container >
        <Home />
      </Container>
    </Layout>
  )
}

export default App
