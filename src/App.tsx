import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="layout">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blogs" element={<BlogsPage />} />
                        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}
export default App
