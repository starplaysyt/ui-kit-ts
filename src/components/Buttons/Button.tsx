import "./Button.css";
import type {MouseEventHandler} from "react";
import {Icon} from "../Icon/Icon.tsx";

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
        <button onClick={props.onClick}>
            {props.iconPath && (
                <Icon src={props.iconPath}></Icon>
            )}
            {/*(iconPath && )*/}
            {/*(props.title && {props.title})*/}
        </button>
    )
}