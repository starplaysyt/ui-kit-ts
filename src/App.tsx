import './App.css'
import {LoadingProvider} from "./contexts/LoadingContext.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";

function App() {
    return (
        <LoadingProvider>
            <ThemeProvider>
                <AuthProvider>
                    <AppRouter />
                </AuthProvider>
            </ThemeProvider>
        </LoadingProvider>
    )
}

export default App
