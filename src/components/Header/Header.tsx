import { FC } from "react";
import { useRouter } from 'next/router'
import Paragraph from "@/components/UI/Paragraph";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faTrash, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    className?: string;
    label?: string;
    leftIcon?: 'iconBack';
    rightIcon?: 'iconGear' | 'iconTrash';
}

const Header: FC<HeaderProps> = (props) => {
    const { className, label, leftIcon, rightIcon } = props;
    const router = useRouter()

    const handleClickBack = () => {
        router.back()
    }

    const handleClickSettings = () => {
        router.push('settings')
    } 

    const handleClickTrash = () => {

    }

    const arrowBack = leftIcon === 'iconBack' ? (
        <button className={styles.button} onClick={handleClickBack}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
        </button>
    ) : null;

    const gear = rightIcon === 'iconGear' ? (
        <button className={styles.button} onClick={handleClickSettings}>
            <FontAwesomeIcon className={styles.icon} icon={faGear} />
        </button>
    ) : null;

    const trash = rightIcon === 'iconTrash' ? (
        <button className={styles.button} onClick={handleClickTrash}>
            <FontAwesomeIcon className={styles.icon} icon={faTrash} />
        </button>
    ) : null;

    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.left}>{arrowBack}</div>
            <Paragraph textStyle='body_large'>{label}</Paragraph>
            <div className={styles.right}>{gear}{trash}</div>
        </header>
    )
}

export default Header