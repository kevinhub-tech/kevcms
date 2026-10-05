import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Loading from "../components/Loading";
interface User {
    user_id: string;
    user_name: string;
    user_email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/v1/user-verify`, {
            method: "GET",
            credentials: "include",
        })
            .then(res => {
                if (!res.ok) throw new Error("Not authenticated");
                return res.json();
            })
            .then(result => setUser(result.data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);


    // Block the entire app until auth verification finishes
    if (loading) {
        return <Loading />;
    }

    const logout = async () => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/v1/user-logout`, {
                method: "POST",
                credentials: "include",
            })
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            setUser(null); // Instantly clears user state in React
            setLoading(false);
        }
    };


    return (
        <AuthContext.Provider value={{ user, loading, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}