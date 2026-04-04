import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Login failed. Please check your credentials.';
            setError(message);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="main-content">
            <div className="container auth-container animate-reveal">
                <div className="auth-card">
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Sign in to your account</p>

                    {error && <div className="auth-error">{error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="auth-field">
                            <label htmlFor="email" className="auth-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="auth-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="password" className="auth-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="auth-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Your password"
                            />
                        </div>

                        <button type="submit" className="auth-btn" disabled={submitting}>
                            {submitting ? 'Signing in...' : 'Login'}
                        </button>
                    </form>

                    <p className="auth-footer">
                        Don't have an account? <Link to="/register" className="auth-link">Register</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
