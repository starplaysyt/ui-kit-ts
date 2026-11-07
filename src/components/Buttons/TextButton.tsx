import {clsx} from "clsx";
import type {MouseEventHandler} from "react";

type TextButtonProps = {
    text: string;
    variant: "primary" | "secondary";
    color: string;
    isDisabled?: boolean;
    isLoading: boolean;
    isStretched?: boolean;
    isSkeleton?: boolean;
    htmlType: "submit" | "reset" | "button" | undefined;
    onClick?: MouseEventHandler;
    className?: string;
}

export const TextButton = ({
                        text,
                        variant = "secondary",
                        color,
                        isDisabled = false,
                        isLoading = false,
                        isStretched = false,
                        isSkeleton = false,
                        htmlType = "button",
                        onClick,
                        className
                    }: TextButtonProps) => {
    if (isSkeleton) {
        return (
            <div className={"skeleton-element button-text"}/>
        )
    }

    return (
        <button
            type={htmlType}
            disabled={isDisabled}
            onClick={onClick}
            className={clsx(
                "ui-button",
                "ui-button--text",
                variant,
                color,
                className,
                {
                    "ui-button--wide": isStretched,
                    "ui-button--loading": isLoading
                }
            )}
        >
            <span className="ui-button__text">
                {text}
            </span>
        </button>
    );
};