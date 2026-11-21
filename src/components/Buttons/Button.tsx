import styles from "./Button.module.css";
import type {MouseEventHandler} from "react";

type ButtonProps = {
    iconPath?: string,
    title?: string,
    type?: string,
    style?: string,
    isLoading?: boolean,
    isEnabled?: boolean,
    isVisible?: boolean,

    onClick?: MouseEventHandler,
}

export const Button = (props : ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.title}</button>
    )
}