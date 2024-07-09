import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Projects from "./Components/Projects/Projects"
import Resume from "./Components/Resume/Resume"
import Skills from "./Components/Skills/Skills"

function App() {

  return (
    <div className="bg-customBackground">
      <Header />
      <Banner />
      <About />
      {/* <Resume></Resume> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
