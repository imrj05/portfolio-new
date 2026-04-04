import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { account } from '../lib/appwrite';
import { ID, type Models } from 'appwrite';

interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
    loading: boolean;
    register: (email: string, password: string, name: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkSession();
    }, []);

    async function checkSession() {
        try {
            const session = await account.get();
            setUser(session);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    async function register(email: string, password: string, name: string) {
        await account.create(ID.unique(), email, password, name);
        await account.createEmailPasswordSession(email, password);
        const session = await account.get();
        setUser(session);
    }

    async function login(email: string, password: string) {
        await account.createEmailPasswordSession(email, password);
        const session = await account.get();
        setUser(session);
    }

    async function logout() {
        await account.deleteSession('current');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
