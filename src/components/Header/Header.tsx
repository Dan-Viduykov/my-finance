import { FC } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
    className?: string;
    label?: string;
    iconGear?: boolean;
    iconBack?: boolean;
    iconTrash?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
    const { className, label, iconGear, iconBack, iconTrash } = props;

    return (
        <header>
            Header
        </header>
    )
}

export default Header