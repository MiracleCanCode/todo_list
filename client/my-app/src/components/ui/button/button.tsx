import { FC } from "react";
import './button.css';
import { MouseEventHandler } from "react"

type buttonStyles = 'default'


interface IButtonProps {
    big ?: boolean,
    style: buttonStyles,
    children: string,
    center ?: boolean,
    onClick ?: MouseEventHandler
}



export const Button: FC<IButtonProps> = ({ children, onClick,  center, style, big, ...props }) => {

    const rootClasses = ['my-button'];

    if (center) {
        rootClasses.push('center-button');
    }

    if (style === 'default') {
        rootClasses.push('default-button');
    }

    if (big) {
        rootClasses.push('big-button');
    }

    return (
        <button type="submit" {...props} onClick={onClick} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};
