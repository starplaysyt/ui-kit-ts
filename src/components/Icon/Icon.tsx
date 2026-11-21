import {type ClassValue, clsx} from "clsx";

export type IconProps = {
    src?: string;
    colorClass?: ClassValue;
}

export const Icon = (props: IconProps) => {
    return (
        (props.src &&
            <div className={clsx("icon", props.colorClass)}
                 style={{maskImage: "url(" + props.src + ")"}}>
            </div>)
    );
}