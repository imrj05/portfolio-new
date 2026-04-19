import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { AptabasePageTracker } from './lib/analytics'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function ScrollToHash() {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0, behavior: 'auto' })
            return
        }

        const id = location.hash.slice(1)

        window.requestAnimationFrame(() => {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    }, [location.hash, location.pathname])

    return null
}

function App() {
    return (
        <BrowserRouter>
            <AptabasePageTracker />
            <ScrollToHash />
            <div className="layout">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/blogs/:slug" element={<BlogDetailPage />} />
                    <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App
