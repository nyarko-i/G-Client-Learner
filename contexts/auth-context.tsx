"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * User interface for authenticated user data
 */
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

/**
 * Authentication context interface
 */
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

/**
 * Authentication context for managing user state across the application
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Authentication provider component
 * Manages user authentication state and provides auth methods
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (storedUser && token) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        // Clear invalid data
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  /**
   * Login function to set user data and store in localStorage
   */
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  /**
   * Logout function to clear user data and redirect to home
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook to use authentication context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
