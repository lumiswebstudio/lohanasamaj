import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heritage from './components/Heritage'
import Initiatives from './components/Initiatives'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Initiatives />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
