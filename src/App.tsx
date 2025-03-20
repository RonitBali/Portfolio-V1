import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
// import { BrowserRouter as  Route,Routes,Router } from 'react-router'
import Hero from './components/Hero'
import './App.css'


function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    
      <Navbar/>
      <Hero/>
    </ThemeProvider>
  );
}

export default App
