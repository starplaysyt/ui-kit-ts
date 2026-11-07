import {createContext, useContext, useMemo, useState} from "react";
import * as React from "react";

type CurrentTheme = {
    themeName: string,
    themeClass: string
}

type ThemeSetter = {
    setTheme: (theme: CurrentTheme) => void;
}

type ThemeGetter = {
    theme: CurrentTheme;
}

type ThemeProviderProps = {
    children: React.ReactNode;
}

const DEFAULT_THEME = {themeName: "Default", themeClass: ""};

const ThemeContextReadingProvider =
    createContext<ThemeGetter>({theme: DEFAULT_THEME});

const ThemeContextWritingProvider =
    createContext<ThemeSetter | undefined>(undefined);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<CurrentTheme>(
        DEFAULT_THEME
    );

    const readingValue: ThemeGetter = useMemo(
        () => ({theme: theme}),
        [theme]);

    const writingValue: ThemeSetter = useMemo(
        () => ({setTheme}),
        []);

    return (
        <ThemeContextWritingProvider value={writingValue}>
            <ThemeContextReadingProvider value={readingValue}>
                {children}
            </ThemeContextReadingProvider>
        </ThemeContextWritingProvider>
    );
}

export const useThemeGetter = () => {
    const theme = useContext(ThemeContextReadingProvider);
    return theme;
}

export const useThemeSetter = () => {
    const theme = useContext(ThemeContextWritingProvider);
    if (theme === undefined) {
        throw new Error("useThemeSetter must be used within ThemeProvider");
    }
    return theme
}