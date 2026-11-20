import {createContext, type ReactNode, useContext, useMemo, useState} from "react";

/**
 * import type {SidebarRoutes} from "../routing/RouteConfiguration.ts";
 */

export type SidebarContextGetter = {
    isOpen: boolean;
}

export type SidebarContextSetter = {
    close: () => void;
    open: () => void;
    setOpen: (isOpen: boolean) => void;
    changeState: () => void;
}

type SidebarContextProviderProps = {
    children: ReactNode;
}

const SidebarReadingContext =
    createContext<SidebarContextGetter | null>(null);

const SidebarWritingContext =
    createContext<SidebarContextSetter | null>(null);

export const SidebarContextProvider = ({children} : SidebarContextProviderProps) => {
    const [isOpen, setOpen] = useState(false);

    const actions : SidebarContextSetter = useMemo<SidebarContextSetter>(() => {
        return {
            close: () => setOpen(false),
            open: () => setOpen(true),
            setOpen: (isOpen : boolean) => setOpen(isOpen),
            changeState: () => setOpen(prev => !prev)
        }
    }, []);

    return (
        <SidebarReadingContext.Provider value={{ isOpen: isOpen }}>
            <SidebarWritingContext.Provider value={actions}>
                {children}
            </SidebarWritingContext.Provider>
        </SidebarReadingContext.Provider>
    )
}

export const useSidebarSetter = () => {
    const context = useContext(SidebarWritingContext);
    if (!context) throw new Error('useSidebarSetter must be used within SidebarContextProvider');
    return context;
}

export const useSidebarGetter = () => {
    const context = useContext(SidebarReadingContext);
    if (!context) throw new Error('useSidebarGetter must be used within SidebarContextProvider');
    return context;
}