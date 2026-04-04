import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'

function App() {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/blogs/:slug" element={<BlogDetailPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App
