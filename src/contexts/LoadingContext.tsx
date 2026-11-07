import * as React from "react";
import {createContext, useContext, useMemo, useState} from "react";

const LoadingWritingProvider =
    createContext<LoadingWritingValue | null>(null);
const LoadingReadingProvider =
    createContext<PageLoadingReadingValue | null>(null);

type LoadingProviderProps = {
    children: React.ReactNode;
}

type LoadingWritingValue = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type PageLoadingReadingValue = {
    isLoading: boolean;
}

export const LoadingProvider
    = ({children}: LoadingProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const parentState = useLoadingGetter();

    const state = useMemo<PageLoadingReadingValue>(
        () => ({
            isLoading: parentState
                ? parentState.isLoading || isLoading
                : isLoading,
        }),
        [isLoading, parentState]
    );

    return (
        <LoadingWritingProvider.Provider value={{setIsLoading}}>
            <LoadingReadingProvider.Provider value={state}>
                {children}
            </LoadingReadingProvider.Provider>
        </LoadingWritingProvider.Provider>
    )
}

export const useLoadingGetter = () => {
    return useContext(LoadingReadingProvider);
}

export const useLoadingSetter = () => {
    return useContext(LoadingWritingProvider);
}