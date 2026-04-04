import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            await register(email, password, name);
            navigate('/');
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Registration failed. Please try again.';
            setError(message);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="main-content">
            <div className="container auth-container animate-reveal">
                <div className="auth-card">
                    <h1 className="auth-title">Create Account</h1>
                    <p className="auth-subtitle">Sign up to get started</p>

                    {error && <div className="auth-error">{error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="auth-field">
                            <label htmlFor="name" className="auth-label">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="auth-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Your name"
                            />
                        </div>

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
                                minLength={8}
                                placeholder="Min 8 characters"
                            />
                        </div>

                        <button type="submit" className="auth-btn" disabled={submitting}>
                            {submitting ? 'Creating account...' : 'Register'}
                        </button>
                    </form>

                    <p className="auth-footer">
                        Already have an account? <Link to="/login" className="auth-link">Login</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
