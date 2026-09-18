import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurrentBuild from './components/CurrentBuild'
import SelectedWork from './components/SelectedWork'
import EngineeringApproach from './components/EngineeringApproach'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <Navbar />
      <main>
        <Hero />
        <CurrentBuild />
        <SelectedWork />
        <EngineeringApproach />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
