import styles from "./SidebarMenu.module.css"
import {clsx} from "clsx";

export type SidebarMenuProps = {}

export const SidebarMenu = (props: SidebarMenuProps) => {
    return (
        <div className={clsx(styles.menuContainer, "v-panel")}>
            <div className={styles.element + " " + styles.active}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">THAT IS</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
            <div className={styles.element}>
                <div className={styles.image} style={{maskImage: "url(" + "/icons/category.svg" + ")"}}></div>
                <a className={styles.caption} href="#">test2</a>
            </div>
        </div>
    );
}