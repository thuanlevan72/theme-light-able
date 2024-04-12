import React, { createContext, useContext, useState } from 'react';

// Define type for context value
interface MobileSidebarContextType {
    open: boolean;
    toggleOpen: () => void;
}

// Create context
const MobileSidebarContext = createContext<MobileSidebarContextType | undefined>(undefined);

// Create provider
export const MobileSidebarProvider = ({ children } : any) => {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <MobileSidebarContext.Provider value={{ open, toggleOpen }}>
            {children}
        </MobileSidebarContext.Provider>
    );
};

// Custom hook to access context values
export const useMobileSidebar = (): MobileSidebarContextType => {
    const context = useContext(MobileSidebarContext);
    if (!context) {
        throw new Error('useMobileSidebar must be used within a MobileSidebarProvider');
    }
    return context;
};
