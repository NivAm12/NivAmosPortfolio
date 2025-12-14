import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
    return (
        <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
            <Navbar />
            <main>
                <Hero />
                <Experience />
                <Skills />
                <Education />
                <Contact />
            </main>
        </div>
    )
}

export default App
