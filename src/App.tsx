import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
// import { BrowserRouter as  Route,Routes,Router } from 'react-router'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import './App.css'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    
      <Navbar/>
      <Hero/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App
