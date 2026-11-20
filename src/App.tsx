import './App.css'
import {LoadingProvider} from "./contexts/LoadingContext.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RouterRoutes} from "./routes.config.ts";

const browserRouter = createBrowserRouter(RouterRoutes);

function App() {
    return (
        <LoadingProvider>
            <ThemeProvider>
                <AuthProvider>
                    <RouterProvider router={browserRouter}/>
                </AuthProvider>
            </ThemeProvider>
        </LoadingProvider>
    )
}

export default App
