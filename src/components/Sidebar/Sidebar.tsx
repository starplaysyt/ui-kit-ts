import {useSidebarGetter} from "../../contexts/SidebarContext.tsx";

export const Sidebar = () => {
    const sidebarState = useSidebarGetter();

    return (
        <nav>
            <a href="/"></a>
        </nav>
    );
}