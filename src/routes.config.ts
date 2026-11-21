import {
    LayoutRule,
    RedirectRule,
    type RouterConfigSource,
    RouteRule,
    type SidebarElement
} from "./routing/RouteConfiguration.ts";
import {useContext} from "react";
import {AuthProvider, useAuth} from "./contexts/AuthContext.tsx";
import type {RouteObject} from "react-router-dom";
import {SidebarLayout} from "./layouts/SidebarLayout.tsx";
import {TestPage} from "./pages/TestPage.tsx";

export const RouterRoutes : RouteObject[] = [
    {
        path: "/",
        Component: SidebarLayout,
        children: [
            {
                index: true,
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