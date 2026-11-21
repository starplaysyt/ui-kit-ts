import {useSidebarGetter} from "../../contexts/SidebarContext.tsx";
import styles from "./Sidebar.module.css";
import {SidebarHeader} from "./SidebarHeader.tsx";
import {Button} from "../Buttons/Button.tsx";
import {SidebarMenu} from "./SidebarMenu.tsx";

export const Sidebar = () => {
    const sidebarState = useSidebarGetter();

    return (
        <div className={styles.sidebarContainer}>
            <SidebarHeader title={"StudNet"}
                           logoPath={"/icons/category.svg"}
                           subtitle={"That is a long subtitle for the ajnsdjnjn zxncjn asjnjkznxc"}>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </SidebarHeader>

            <SidebarMenu>

            </SidebarMenu>
        </div>
    );
}