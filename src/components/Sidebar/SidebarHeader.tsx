import styles from "./SidebarHeader.module.css";
import {clsx} from "clsx";
import type {ReactNode} from "react";

export type SidebarHeaderActionProps = {
    onClick?: Promise<any> | undefined;
    iconPath?: string | undefined;
}

export type SidebarHeaderProps = {
    title: string;
    subtitle: string;
    logoPath: string;

    children?: ReactNode;
}

export const SidebarHeader = (props: SidebarHeaderProps) => {
    return (
        <div className={clsx(styles.sidebarHeader, "v-panel")}>
            <div className={styles.infoPanel}>
                <div className={styles.logo}>
                    <div style={{maskImage: "url(" + props.logoPath + ")"}}/>
                </div>

                <div className={styles.titles}>
                    <a className={"text-title"}>{props.title}</a>
                    <small className={"text-dim"}>{props.subtitle}</small>
                </div>
            </div>

            {props.children &&
                <div className={styles.actionPanel}>
                    {props.children}
                </div>
            }
        </div>
    );
}
