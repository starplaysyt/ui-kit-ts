import {useSidebarGetter} from "../../contexts/SidebarContext.tsx";
import {useMemo} from "react";

export const Sidebar = () => {
    const sidebarState = useSidebarGetter();



    // if sidebar state is false - not rendering.

    return (
        <nav>
            <a href="/"></a>
        </nav>
    );
}