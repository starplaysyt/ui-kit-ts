import * as React from "react";
import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";

export type DesignTheme = {
    themeName: string,
    themeClass: string
}

type ThemeSetter = {
    setTheme: (theme: DesignTheme) => void;
}

type ThemeProviderProps = {
    children: React.ReactNode;
}

const DEFAULT_THEME = {themeName: "Default", themeClass: "dark"};

const ThemeContextReadingProvider =
    createContext<DesignTheme>(DEFAULT_THEME);

const ThemeContextWritingProvider =
    createContext<ThemeSetter | undefined>(undefined);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    useEffect(() => {
        document.body.classList.add(DEFAULT_THEME.themeClass);
    }, [])

    const [theme, setTheme] = useState<DesignTheme>(
        DEFAULT_THEME
    );

    const setGlobalTheme = useCallback((newTheme: DesignTheme) => {
        setTheme((old) => {
            document.body.classList.remove(old.themeClass);
            document.body.classList.add(newTheme.themeClass);
            return newTheme;
        });
    }, [])

    const readingValue: DesignTheme = useMemo(
        () => (theme),
        [theme]);

    const writingValue: ThemeSetter = useMemo(
        () => ({setTheme: setGlobalTheme}),
        [setGlobalTheme]);

    return (
        <ThemeContextWritingProvider value={writingValue}>
            <ThemeContextReadingProvider value={readingValue}>
                {children}
            </ThemeContextReadingProvider>
        </ThemeContextWritingProvider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    return useContext(ThemeContextReadingProvider);
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSetTheme = () => {
    const setter = useContext(ThemeContextWritingProvider);
    if (!setter)
        throw new Error("useThemeSetter must be used within ThemeProvider");
    return setter;
}