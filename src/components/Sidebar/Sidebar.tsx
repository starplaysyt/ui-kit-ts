import styles from "./Sidebar.module.css";
import {SidebarHeader} from "./SidebarHeader.tsx";
import {Button} from "../Buttons/Button.tsx";
import {SidebarMenu} from "./SidebarMenu.tsx";
import {useSetTheme} from "../../contexts/ThemeContext.tsx";

export const Sidebar = () => {
    // const sidebarState = useSidebarGetter();

    const themeSetter = useSetTheme();

    return (
        <div className={styles.sidebarContainer}>
            <SidebarHeader title={"StudNet"}
                           logoPath={"/icons/category.svg"}
                           subtitle={"That is a long subtitle for the ajnsdjnjn zxncjn asjnjkznxc"}>
                <Button iconPath={"/icons/category.svg"}
                        onClick={() => themeSetter.setTheme({themeName: "name", themeClass: "class"})}></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </SidebarHeader>

            <SidebarMenu>

            </SidebarMenu>
        </div>
    );
}