import {Outlet} from "react-router-dom";

export type SidebarLayoutProps = {

}

export const SidebarLayout = () => {
    return (
        <div className={""}>
            <a>That is a sidebar layout</a>
            <Outlet/>
        </div>
    )
}