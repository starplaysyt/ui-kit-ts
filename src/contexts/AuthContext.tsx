import { createContext, type ReactNode, useCallback, useContext, useState } from "react";
import type {UserPermissionsData} from "../auth/auth.ts";

export type AuthUser = {
    login: string;
    name: string;
    auth_data: UserPermissionsData;
}

type AuthorizeAction = (login: string, password: string) => Promise<AuthUser | null>;
type AuthorizeApiCall = (login: string, password: string) => Promise<AuthUser | null>;

const AuthWritingContext = createContext<AuthorizeAction | undefined>(undefined);
const AuthReadingContext = createContext<AuthUser | null | undefined>(undefined);

const UserLoginRequest : AuthorizeApiCall = async (login : string, _password : string) : Promise<AuthUser> => {
    return {
        login: login,
        name: "Test Name with multiple, and here is the login: " + login,
        auth_data: {
            userGroup: null,
            permissions: []
        }
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const authorize = useCallback<AuthorizeAction>(
        async (login, password) => {
            const userValue = await UserLoginRequest(login, password);
            setUser(userValue);
            return userValue;
        },
        []
    );

    return (
        <AuthReadingContext.Provider value={user}>
            <AuthWritingContext.Provider value={authorize}>
                {children}
            </AuthWritingContext.Provider>
        </AuthReadingContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthReadingContext);
    if (context === undefined) {
        throw new Error("useAuth must be used inside an AuthProvider");
    }
    return context; // AuthUser | null
};

export const useAuthenticator = () => {
    const context = useContext(AuthWritingContext);
    if (context === undefined) {
        throw new Error("useAuthenticator must be used inside an AuthProvider");
    }
    return context;
};