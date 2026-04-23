// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize state from localStorage
    const [userId, setUserIdState] = useState(null);
    const [userRole, setUserRoleState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Restore auth state from localStorage on mount
    useEffect(() => {
        try {
            const storedUserId = localStorage.getItem('userId');
            const storedUserRole = localStorage.getItem('userRole');
            
            if (storedUserId) {
                setUserIdState(storedUserId);
            }
            if (storedUserRole) {
                setUserRoleState(storedUserRole);
            }
        } catch (e) {
            console.error('Error restoring auth state from localStorage:', e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Synchronize userId with localStorage
    const setUserId = (id) => {
        try {
            if (id) {
                localStorage.setItem('userId', id);
                setUserIdState(id);
            } else {
                localStorage.removeItem('userId');
                setUserIdState(null);
            }
        } catch (e) {
            console.error('Error setting userId in localStorage:', e);
            setUserIdState(id);
        }
    };

    // Synchronize userRole with localStorage
    const setUserRole = (role) => {
        try {
            if (role) {
                localStorage.setItem('userRole', role);
                setUserRoleState(role);
            } else {
                localStorage.removeItem('userRole');
                setUserRoleState(null);
            }
        } catch (e) {
            console.error('Error setting userRole in localStorage:', e);
            setUserRoleState(role);
        }
    };

    // Logout function to clear all auth data
    const logout = () => {
        try {
            localStorage.removeItem('userId');
            localStorage.removeItem('userRole');
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }
        setUserIdState(null);
        setUserRoleState(null);
    };

    return (
        <AuthContext.Provider value={{ 
            userId, 
            setUserId, 
            userRole, 
            setUserRole, 
            logout,
            isLoading,
            isAuthenticated: !!userId
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
