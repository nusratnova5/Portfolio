import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"

function App() {

  return (
    <div className="w-3/4 mx-auto">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
