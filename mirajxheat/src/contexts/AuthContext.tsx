import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/types";

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem("miraj-xheat-user-session");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call
        await new Promise((r) => setTimeout(r, 800));

        const users = JSON.parse(localStorage.getItem("miraj-xheat-users") || "[]");
        const foundUser = users.find((u: any) => u.email === email && u.password === password);

        if (foundUser) {
            const { password: _, ...userSession } = foundUser;
            setUser(userSession);
            localStorage.setItem("miraj-xheat-user-session", JSON.stringify(userSession));
            return true;
        }
        return false;
    };

    const signup = async (name: string, email: string, password: string): Promise<boolean> => {
        await new Promise((r) => setTimeout(r, 800));

        const users = JSON.parse(localStorage.getItem("miraj-xheat-users") || "[]");

        if (users.find((u: any) => u.email === email)) {
            return false; // User already exists
        }

        const newUser: User = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            email,
            password,
            joinedAt: new Date().toISOString(),
        };

        users.push(newUser);
        localStorage.setItem("miraj-xheat-users", JSON.stringify(users));

        const { password: _, ...userSession } = newUser;
        setUser(userSession);
        localStorage.setItem("miraj-xheat-user-session", JSON.stringify(userSession));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("miraj-xheat-user-session");
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
