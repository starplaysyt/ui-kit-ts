import {Outlet} from "react-router-dom";
import {Sidebar} from "../components/Sidebar/Sidebar.tsx";
import {SidebarContextProvider} from "../contexts/SidebarContext.tsx";
import styles from "./SidebarLayout.module.css";

export type SidebarLayoutProps = {

}

export const SidebarLayout = () => {
    return (
        <div className={styles.layout}>
            <SidebarContextProvider>
                <Sidebar/>
                <Outlet/>
            </SidebarContextProvider>
        </div>
    )
}