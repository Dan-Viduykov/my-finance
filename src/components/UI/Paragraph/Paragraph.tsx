import { FC, PropsWithChildren, TextareaHTMLAttributes   } from "react";
import styles from "./Paragraph.module.scss";

const enum TextTypes {
    'display',
    'ft__8',
    'ft__7',
    'ft__6',
    'ft__5',
    'ft__4',
    'ft__3',
    'ft__2',
    'ft__1',
    'subtitle',
    'body_large',
    'body_middle',
    'body_small',
}

interface ParagraphProps extends TextareaHTMLAttributes<HTMLParagraphElement> {
    textStyle?: keyof typeof TextTypes;
}

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = (props) => {
    const {children, textStyle = 'ft__2', className, ...rest} = props;

    return (
        <p className={`${className} ${styles[textStyle]}`} {...rest}>{children}</p>
    )
}

export default Paragraph