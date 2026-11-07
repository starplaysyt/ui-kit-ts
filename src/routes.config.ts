import {LayoutRule, RedirectRule, type RouterConfigSource, RouteRule} from "./routing/RouteConfiguration.ts";
import {TextButton} from "./components/Buttons/TextButton.tsx";
import {useContext} from "react";
import {AuthProvider, useAuth} from "./contexts/AuthContext.tsx";

export const RoutesConfig : RouterConfigSource = {
    layouts: [
        new LayoutRule("minimal", TextButton),
    ],
    routes: [
        new RouteRule("testPage", "/testPage", TextButton, "minimal",
            false, [], [], "", true)
    ],
    redirectRules: [
        new RedirectRule("/login", () => {
            const context = useAuth();
            return context === null;
        }, "/dashboard")
    ]
}