import { FC } from "react";
import { useRouter } from 'next/router'
import { faBorderAll, faCalendarDays, faCreditCard, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavigationBar.module.scss";

const NavigationBar: FC = () => {
    const router = useRouter();

    return (
        <div className={styles.wrap}>
            <nav className={styles.navigation}>
                <button className={styles.btnAddSub}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles.icon_white}`} icon={faPlus} />
                </button>
                <div className={styles.buttonGroup}>
                    <button className={styles.button}>
                        <FontAwesomeIcon
                            className={`${styles.icon} ${router.pathname === '/' ? styles.icon_white : null}`}
                            icon={faHouse} />
                    </button>
                    <button className={styles.button}>
                        <FontAwesomeIcon
                            className={`${styles.icon} ${router.pathname === '/spending' ? styles.icon_white : null}`}
                            icon={faBorderAll} />
                    </button>
                    <button className={styles.button}>
                        <FontAwesomeIcon
                            className={`${styles.icon} ${router.pathname === '/calendar' ? styles.icon_white : null}`}
                            icon={faCalendarDays} />
                    </button>
                    <button className={styles.button}>
                        <FontAwesomeIcon
                            className={`${styles.icon} ${router.pathname === '/credit-card' ? styles.icon_white : null}`}
                            icon={faCreditCard} />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar