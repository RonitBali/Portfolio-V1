import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
// import { BrowserRouter as  Route,Routes,Router } from 'react-router'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import './App.css'
import Projects from './components/Projects'
import About from './components/About'
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer'
import Particles from './components/ui/Particles'


function App({ children }: { children?: React.ReactNode }) {
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <Particles
          particleColors={["#d3c6d7", "#d3c6d7"]}
          particleCount={200}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar/>
      <Hero/>
      <TechStack/>
      <About/>
      <Projects/>
      <Footer/>
      <Analytics/>
    </ThemeProvider>
  );
}

export default App
