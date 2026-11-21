import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Programs from './components/Programs'
import DonationBanner from './components/DonationBanner'
import Leadership from './components/Leadership'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Programs />
        <DonationBanner />
        <Leadership />
      </main>
      <Footer />
    </div>
  )
}

export default App
