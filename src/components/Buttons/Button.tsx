type ButtonProps = {
    iconPath?: string,
    title?: string,
    type?: string,
    style?: string,
    isLoading?: boolean,
    isEnabled?: boolean,
    isVisible?: boolean,

    onClick?: Promise<any>,
}

export const Button = (props : ButtonProps) => {
    return (
        <button>{props.title}</button>
    )
}