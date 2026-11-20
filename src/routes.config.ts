import {
    LayoutRule,
    RedirectRule,
    type RouterConfigSource,
    RouteRule,
    type SidebarElement
} from "./routing/RouteConfiguration.ts";
import {TextButton} from "./components/Buttons/TextButton.tsx";
import {useContext} from "react";
import {AuthProvider, useAuth} from "./contexts/AuthContext.tsx";
import type {RouteObject} from "react-router-dom";
import {SidebarLayout} from "./layouts/SidebarLayout.tsx";
import {TestPage} from "./pages/TestPage.tsx";

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

export const RouterRoutes : RouteObject[] = [
    {
        path: "/",
        Component: SidebarLayout,
        children: [
            {
                index: true
            },
            {
                path: "/dashboard",
                Component: TestPage,
                loader: (args) => {

                }
            }
        ]
    }
]

export const SidebarRoutes : Record<string, SidebarElement[]> = {
    "admin": [
        {
            title: "testTitle",
            path: "/admin",
            pathToIcon: null,
            userGroup: ["admin"],
            groupName: "name"
        }
    ],
    "user": [
        {
            title: "testTitle",
            path: "/user",
            pathToIcon: null,
            userGroup: ["admin"],
            groupName: "name"
        }
    ],
    "*": [
        {
            title: "testTitle",
            path: "/guest",
            pathToIcon: null,
            userGroup: ["admin"],
            groupName: "name"
        }
    ]
}