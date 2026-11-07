import * as React from "react";

export class RouteRule {
    id: string;
    path: string;
    component: (props: any) => React.JSX.Element;
    layoutId: string; // identifier of current layout, will be taken from Layout array.
    requiredAuth: boolean;
    requiredRoles: string[];
    requiredPermissions: string[];
    redirectTo: string;
    exact: boolean;

    constructor(id: string, path: string, component: (props: any) => React.JSX.Element,
                layoutId: string, requiredAuth: boolean, requiredRoles: string[],
                requiredPermissions: string[], redirectTo: string, exact: boolean) {
        this.id = id;
        this.path = path;
        this.component = component;
        this.layoutId = layoutId;
        this.requiredAuth = requiredAuth;
        this.requiredRoles = requiredRoles;
        this.requiredPermissions = requiredPermissions;
        this.redirectTo = redirectTo;
        this.exact = exact;
    }
}

export class RedirectRule {
    from: string;
    when: () => boolean;
    to: string | ((role: string) => string);

    constructor(from: string, when: () => boolean, to: string | ((role: string) => string)) {
        this.from = from;
        this.when = when;
        this.to = to;
    }
}

export class LayoutRule {
    id: string;
    component: (props: any) => React.JSX.Element;

    constructor(id: string, component: (props: any) => React.JSX.Element) {
        this.id = id;
        this.component = component;
    }
}

export type RouterConfigSource = {
    routes : RouteRule[];
    redirectRules : RedirectRule[];
    layouts : LayoutRule[];
}