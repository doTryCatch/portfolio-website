import React, { createContext, useContext, useState } from "react";

interface AuthContextSchema {
    openRootAuth: () => void;
    closeRootAuth: () => void;
    openForm: () => void;
    closeForm: () => void;
}
const AuthContext = createContext<AuthContextSchema | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isAuthOpen, setAuthOpen] = useState(false);
    const [isFormOpen, setFormOpen] = useState(false);
    const openRootAuth = () => setAuthOpen(true);
    const closeRootAuth = () => setAuthOpen(false);
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);
    const handleSuccess = () => {
        setAuthOpen(false);
        setFormOpen(true);
    };

    return (
        <AuthContext.Provider
            value={{ openRootAuth, closeRootAuth, openForm, closeForm }}
        >
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
export { useAuth, AuthProvider };
